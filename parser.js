const { getMetadata } = require('page-metadata-parser');
const domino = require('domino');
const download = require('image-downloader');
const fetch = require('node-fetch');
const moment = require('moment');
const uuid = (short = require('short-uuid'));

const [url, date] = process.argv.slice(2);

if (!url) {
  throw new Error('Invalid url');
}

let source;
if (url.includes('folha.uol.com.br')) {
  source = 'folha';
} else if (url.includes('reinaldoazevedo.blogosfera.uol.com.br')) {
  source = 'reinaldoazevedo';
} else if (url.includes('uol.com.br')) {
  source = 'uol';
} else if (url.includes('theintercept.com') || url.includes('TheInterceptBr')) {
  source = 'intercept';
} else if (url.includes('veja.abril.com.br')) {
  source = 'veja';
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

  await download.image({
    url: image,
    dest: `${__dirname}/src/images/articles/${id}.jpg`
  });

  const articleImage = `${id}: file(relativePath: { eq: "articles/${id}.jpg" }) {
  ...articleImage
}`;

  console.log('\n\n');
  console.log(JSON.stringify(article));
  console.log('\n\n');
  console.log(articleImage);
};

parser(url);
