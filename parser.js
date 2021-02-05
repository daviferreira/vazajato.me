const { getMetadata } = require('page-metadata-parser');
const domino = require('domino');
const download = require('image-downloader');
const fetch = require('node-fetch');
const fs = require('fs');
const moment = require('moment');
const path = require('path');
const prettier = require('prettier');
const prompt = require('prompts');
const signale = require('signale');
const uuid = require('short-uuid');

const articlesData = require('./src/data/articles.json');

const prettierOptions = {
  singleQuote: true,
};

let interval;

(async function () {
  const questions = [
    {
      type: 'text',
      name: 'url',
      message: `Qual a URL da reportagem?`,
    },
    {
      type: 'text',
      name: 'publishDate',
      message: `E a data? (YYYY-MM-DD - Deixe em branco pra hoje).`,
    },
    {
      type: 'list',
      name: 'topics',
      message: 'Tópicos, separados por vírgula:',
      initial: '',
      separator: ',',
    },
  ];

  const { url, publishDate, topics } = await prompt(questions, {
    onCancel: cleanup,
    onSubmit: cleanup,
  });

  if (!url) {
    return signale.fatal(`ERROR: URL inválida`);
  } else if (articlesData.find((data) => data.url === url)) {
    return signale.fatal(`ERROR: URL já existe`);
  }

  try {
    await fetchArticle(url, publishDate, topics);
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

const getSource = (url) => {
  let source;

  if (url.includes('monicabergamo')) {
    source = 'monicabergamo';
  } else if (url.includes('jamil-chade')) {
    source = 'jamilchade';
  } else if (url.includes('folha.uol.com.br')) {
    source = 'folha';
  } else if (url.includes('migalhas.uol.com.br')) {
    source = 'migalhas';
  } else if (url.includes('colunas/reinaldo-azevedo')) {
    source = 'reinaldoazevedo';
  } else if (url.includes('uol.com.br')) {
    source = 'uol';
  } else if (
    url.includes('theintercept.com') ||
    url.includes('TheInterceptBr') ||
    url.includes('rafaelmmartins')
  ) {
    source = 'intercept';
  } else if (url.includes('veja.abril.com.br')) {
    source = 'veja';
  } else if (url.includes('apublica.org') || url.includes('VianaNatalia')) {
    source = 'apublica';
  } else if (url.includes('elpais.com')) {
    source = 'elpais';
  } else if (url.includes('buzzfeed.com')) {
    source = 'buzzfeed';
  } else if (url.includes('ggreenwald')) {
    source = 'glenn';
  } else if (url.includes('cnnbrasil')) {
    source = 'cnn';
  } else if (url.includes('conjur')) {
    source = 'conjur';
  } else if (url.includes('revistaforum')) {
    source = 'forum';
  } else if (url.includes('estadao')) {
    source = 'estadao';
  } else if (url.includes('cartacapital')) {
    source = 'cartacapital';
  } else if (url.includes('metropoles')) {
    source = 'metropoles';
  }

  return source;
};

const fetchArticle = async (url, date, topics) => {
  const source = getSource(url);

  if (!source) {
    return signale.fatal('Fonte inválida.');
  }

  const id = `${source}${uuid.generate()}`;
  const publishDate = date || moment().format('YYYY-MM-DD');

  signale.pending('Baixando meta dados');

  let metaData;
  try {
    metaData = await fetchMetaData(url);
  } catch (err) {
    return signale.fatal(err);
  }

  const { title, image } = metaData;

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

  signale.success('🎉 ALL DONE! 🎉');
};

function cleanup() {
  clearInterval(interval);
}
