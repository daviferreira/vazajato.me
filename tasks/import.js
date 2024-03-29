const { getMetadata } = require('page-metadata-parser');
const csv = require('csvtojson');
const domino = require('domino');
const download = require('image-downloader');
const fs = require('fs');
const moment = require('moment');
const path = require('path');
const prettier = require('prettier');
const signale = require('signale');
const uuid = require('short-uuid');

const articlesData = require('../src/data/articles.json');
const sourcesData = require('../src/data/sources');

const prettierOptions = {
  singleQuote: true,
};

function getArticle(data) {
  const fetchMetaData = async (url) => {
    const response = await fetch(url, { compress: false });
    const html = await response.text();
    const doc = domino.createWindow(html).document;
    const metadata = getMetadata(doc, url);
    return metadata;
  };

  const fetchArticle = async (data) => {
    const { source, title, url, publishDate, topics } = data;

    if (!source || !Object.keys(sourcesData).includes(source)) {
      return signale.fatal('Fonte inválida.');
    }

    const id = `${source}${uuid.generate()}`;

    signale.pending('Baixando meta dados');

    let metaData;
    try {
      metaData = await fetchMetaData(url);
    } catch (err) {
      return signale.fatal(err);
    }

    const { image } = metaData;

    const article = {
      articleId: id,
      title,
      url,
      publishDate: moment(publishDate, 'DD/MM/YYYY').format('YYYY-MM-DD'),
      source,
      topics: topics.split(',').map((topic) => topic.trim().replace('"', '')),
    };

    signale.success('Meta dados adquiridos');

    signale.pending('Baixando imagem de capa');

    try {
      await download.image({
        url: image,
        dest: path.join(__dirname, `../src/images/articles/${id}.jpg`),
      });
    } catch (err) {
      return signale.fatal(err);
    }

    signale.success('Download da image de capa realizado com sucesso');

    const articleImage = `${id}: file(relativePath: { eq: "articles/${id}.jpg" }) {
      ...articleImage
    }
    # NEW IMAGE PLACEHOLDER`;

    signale.pending('Atualizando articles.json');
    articlesData.push(article);
    const formattedArticlesContent = await prettier.format(
      JSON.stringify(articlesData),
      {
        parser: 'json',
        ...prettierOptions,
      },
    );
    fs.writeFileSync(
      path.join(__dirname, '..', 'src', 'data', 'articles.json'),
      formattedArticlesContent,
    );
    signale.success('Articles.json atualizado');

    signale.pending('Atualizando Image.js');
    const imagesFilePath = path.join(
      __dirname,
      '..',
      'src',
      'components',
      'Timeline',
      'Section',
      'Article',
      'Image.js',
    );
    const imagesFileContent = fs.readFileSync(imagesFilePath, 'utf8');
    const formattedImagesContent = await prettier.format(
      imagesFileContent.replace('# NEW IMAGE PLACEHOLDER', articleImage),
      {
        parser: 'babel',
        ...prettierOptions,
      },
    );
    fs.writeFileSync(imagesFilePath, formattedImagesContent);
    signale.success('Image.js atualizado');
  };

  (async function () {
    try {
      await fetchArticle(data);
    } catch (err) {
      return signale.fatal(err);
    }
  })();
}

function importSheet() {
  const url =
    'https://docs.google.com/spreadsheets/d/1y9bixq_sZ5TOwwqfoagRKX4zCm1Ka6hXbch9qN6OtKI/export?format=csv';

  const settings = { method: 'GET' };

  const header = 'source,publishDate,title,url,topics';

  fetch(url, settings)
    .then((res) => res.text())
    .then((text) => {
      const parsed = text.split('\n').slice(1).join('\n');
      const csvStr = `${header}\n${parsed}`;

      const newArticles = [];

      csv()
        .fromString(csvStr)
        .then(async (articles) => {
          articles.forEach((article) => {
            if (
              !article.url.startsWith('https://www.vazajato.me/') &&
              !articlesData.find((data) => data.url === article.url)
            ) {
              newArticles.push(article);
            }
          });

          for (const newArticle of newArticles) {
            await getArticle(newArticle);
          }

          if (newArticles.length === 0) {
            signale.fatal('No new articles found.');
          }
        });
    });
}

importSheet();
