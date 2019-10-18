const { getMetadata } = require('page-metadata-parser');
const domino = require('domino');
const download = require('image-downloader');
const fetch = require('node-fetch');
const fs = require('fs');
const moment = require('moment');
const path = require('path');
const prettier = require('prettier');
const uuid = require('short-uuid');

const articlesData = require('./src/data/articles.json');

const [url, date] = process.argv.slice(2);

const prettierOptions = {
  singleQuote: true
};

if (!url) {
  throw new Error('Invalid url');
}

let source;
if (url.includes('monicabergamo')) {
  source = 'monicabergamo';
} else if (url.includes('folha.uol.com.br')) {
  source = 'folha';
} else if (url.includes('reinaldoazevedo.blogosfera.uol.com.br')) {
  source = 'reinaldoazevedo';
} else if (url.includes('uol.com.br')) {
  source = 'uol';
} else if (url.includes('theintercept.com') || url.includes('TheInterceptBr')) {
  source = 'intercept';
} else if (url.includes('veja.abril.com.br')) {
  source = 'veja';
} else if (url.includes('apublica.org')) {
  source = 'apublica';
} else if (url.includes('elpais.com')) {
  source = 'elpais';
} else if (url.includes('buzzfeed.com')) {
  source = 'buzzfeed';
} else if (url.includes('ggreenwald')) {
  source = 'glenn';
}

if (!source) {
  throw new Error('Invalid source');
}

const id = `${source}${uuid.generate()}`;
const publishDate = date || moment().format('YYYY-MM-DD');

const fetchMetaData = async url => {
  const response = await fetch(url);
  const html = await response.text();
  const doc = domino.createWindow(html).document;
  const metadata = getMetadata(doc, url);
  return metadata;
};

const parser = async url => {
  const { title, image } = await fetchMetaData(url);

  const article = {
    id,
    title,
    url,
    publishDate,
    source
  };

  if (articlesData.find(data => data.url === url)) {
    return console.error(`ERROR: URL já existe!`);
  }

  await download.image({
    url: image,
    dest: `${__dirname}/src/images/articles/${id}.jpg`
  });

  const articleImage = `
${id}: file(relativePath: { eq: "articles/${id}.jpg" }) {
  ...articleImage
}
# NEW IMAGE PLACEHOLDER`;

  // console.log('\n\n');
  // console.log(JSON.stringify(article));
  articlesData.push(article);
  fs.writeFileSync(
    path.join(__dirname, 'src', 'data', 'articles.json'),
    prettier.format(JSON.stringify(articlesData), {
      parser: 'json',
      ...prettierOptions
    })
  );

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
  // console.log('\n\n');
  // console.log(articleImage);
  console.log('ALL DONE');
};

parser(url);
