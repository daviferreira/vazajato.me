const { getMetadata } = require('page-metadata-parser');
const csv = require('csvtojson');
const domino = require('domino');
const download = require('image-downloader');
const fetch = require('node-fetch');
const fs = require('fs');
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
  (async function () {
    try {
      await fetchArticle(data);
    } catch (err) {
      return signale.fatal(err);
    }
  })();

  const fetchMetaData = async (url) => {
    const response = await fetch(url);
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
      id,
      title,
      url,
      publishDate,
      source,
      topics,
    };

    signale.success('Meta dados adquiridos');

    signale.pending('Baixando imagem de capa');

    try {
      await download.image({
        url: image,
        dest: path.join(__dirname, `/src/images/articles/${id}.jpg`),
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
    fs.writeFileSync(
      path.join(__dirname, 'src', 'data', 'articles.json'),
      prettier.format(JSON.stringify(articlesData), {
        parser: 'json',
        ...prettierOptions,
      })
    );
    signale.success('Articles.json atualizado');

    signale.pending('Atualizando Image.js');
    const imagesFilePath = path.join(
      __dirname,
      'src',
      'components',
      'Timeline',
      'Section',
      'Article',
      'Image.js'
    );
    const imagesFileContent = fs.readFileSync(imagesFilePath, 'utf8');
    fs.writeFileSync(
      imagesFilePath,
      prettier.format(
        imagesFileContent.replace('# NEW IMAGE PLACEHOLDER', articleImage),
        prettierOptions
      )
    );
    signale.success('Image.js atualizado');
  };
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
