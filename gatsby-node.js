const groupBy = require('lodash.groupby');
const map = require('lodash.map');
const fs = require('fs');
const slugify = require('slugify');

const DIR = 'public/pages/';

function createSourcePages(articles) {
  const groupedArticles = groupBy(articles, 'source');

  map(groupedArticles, (group, source) => {
    createJSON({
      path: `sources/${source}`,
      context: {
        pageArticles: group,
      },
    });

    // eslint-disable-next-line
    console.log(`\nCreated ${source}.json.`);
  });
}

function createTopicPages(articles) {
  const topicsData = {};
  const topicsPage = [];

  articles.forEach((article) => {
    article.topics = article.topics.map((topic) => {
      if (topic && !topicsPage.includes(topic)) {
        topicsPage.push(topic);
      }
      return slugify(topic).toLowerCase().trim();
    });

    article.topics.forEach((topic) => {
      if (topic) {
        if (topicsData[topic]) {
          topicsData[topic].push(article);
        } else {
          topicsData[topic] = [article];
        }
      }
    });
  });

  createJSON({
    path: `topics`,
    context: {
      pageArticles: topicsPage.sort((a, b) => a.localeCompare(b)),
    },
  });

  map(topicsData, (group, topic) => {
    createJSON({
      path: `topics/${topic}`,
      context: {
        pageArticles: group,
      },
    });

    // eslint-disable-next-line
    console.log(`\nCreated ${topic}.json.`);
  });
}

function createArticlesPagination(articles) {
  const groupedArticles = groupBy(articles, ({ publishDate }) =>
    publishDate.slice(0, 7)
  );

  const months = Object.keys(groupedArticles).reverse();
  const lastMonth = months[0];

  map(groupedArticles, (group, month) => {
    createJSON({
      path: `/${month}`,
      context: {
        pageArticles: group,
      },
    });

    // eslint-disable-next-line
    console.log(`\nCreated ${month}.json.`);

    if (month === lastMonth) {
      createJSON({
        path: `/data`,
        context: {
          pageArticles: group,
        },
      });

      // eslint-disable-next-line
      console.log(`\nCreated data.json with month ${month}.`);
    }
  });

  fs.writeFile(`${DIR}/months.json`, JSON.stringify(months), function (err) {
    if (err) {
      // eslint-disable-next-line
      return console.log(err);
    }
  });
}

function createJSON({
  context: { pageArticles, currentPage, totalPages },
  path,
}) {
  if (!fs.existsSync(DIR)) {
    fs.mkdirSync(DIR);
  }

  if (!fs.existsSync(`${DIR}sources`)) {
    fs.mkdirSync(`${DIR}sources`);
  }

  if (!fs.existsSync(`${DIR}topics`)) {
    fs.mkdirSync(`${DIR}topics`);
  }

  const filePath = `${DIR}${path}.json`;
  const dataToSave = JSON.stringify(pageArticles);

  fs.writeFile(filePath, dataToSave, function (err) {
    if (err) {
      // eslint-disable-next-line
      return console.log(err);
    }
  });
}

exports.createPages = ({ graphql, actions }) => {
  return graphql(`
    query articlesListQuery {
      allArticlesJson(sort: { fields: [publishDate], order: [ASC] }) {
        totalCount
        edges {
          node {
            id
            title
            url
            publishDate
            source
            topics
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const articles = result.data.allArticlesJson.edges.map(({ node }) => node);

    return Promise.all([
      createArticlesPagination(articles),
      createSourcePages(articles),
      createTopicPages(articles),
    ]);
  });
};
