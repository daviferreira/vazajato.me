const { getMetadata } = require('page-metadata-parser');
const domino = require('domino');
const download = require('image-downloader');
const fetch = require('node-fetch');
const moment = require('moment');
const uuid = require('uuid');

const [url, date] = process.argv.slice(2);

if (!url) {
  throw new Error('Invalid url');
}

const id = uuid.v4();
const publishDate = date || moment().format('YYYY-MM-DD');

const fetchMetaData = async url => {
  const response = await fetch(url);
  const html = await response.text();
  const doc = domino.createWindow(html).document;
  const metadata = getMetadata(doc, url);
  return metadata;
};

const parser = async url => {
  const { title, description, image } = await fetchMetaData(url);

  const article = {
    id,
    title,
    description,
    url,
    publishDate,
    source: ''
  };

  await download.image({
    url: image,
    dest: `${__dirname}/src/images/articles/${id}.jpg`
  });

  const articleImage = `${id} : file(relativePath: { eq: "articles/${id}.jpg" }) {
  ...articleImage
}`;

  console.log(article);
  console.log(articleImage);
};

parser(url);
