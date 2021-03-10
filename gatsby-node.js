const groupBy = require('lodash.groupby');
const map = require('lodash.map');
const fs = require('fs');
const slugify = require('slugify');
const path = require('path');

const DIR = 'public/pages/';

const timelineTemplate = path.resolve(`src/templates/timeline.js`);

function createSourcePages(articles, createPage) {
  const groupedArticles = groupBy(articles, 'source');

  map(groupedArticles, (group, source) => {
    const path = `veiculos/${source}`;

    createPage({
      path,
      component: timelineTemplate,
      context: {
        articles: group.reverse(),
        source,
      },
    });

    // eslint-disable-next-line
    console.log(`\nCreated ${source} page.`);
  });
}

function createTopicPages(articles, createPage) {
  const topicsData = {};
  const topicsPage = [];
  const topicsLabels = {};

  articles.forEach((article) => {
    article.topics = article.topics.map((topic) => {
      const slug = slugify(topic).toLowerCase().trim();
      if (topic && !topicsPage.includes(topic)) {
        topicsPage.push(topic);
        topicsLabels[slug] = topic;
      }
      return slug;
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
    // createJSON({
    //   path: `topics/${topic}`,
    //   context: {
    //     pageArticles: group,
    //   },
    // });

    const path = `topicos/${topic}`;

    createPage({
      path,
      component: timelineTemplate,
      context: {
        articles: group.reverse(),
        topic: topicsLabels[topic],
      },
    });

    // eslint-disable-next-line
    console.log(`\nCreated ${topic} page.`);
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
  const { createPage } = actions;

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
      createSourcePages(articles, createPage),
      createTopicPages(articles, createPage),
    ]);
  });
};
