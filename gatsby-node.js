const groupBy = require('lodash.groupby');
const map = require('lodash.map');
const fs = require('fs');

const DIR = 'public/pages/';

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
        pageArticles: group
      }
    });

    console.log(`\nCreated ${month}.json.`);

    if (month === lastMonth) {
      createJSON({
        path: `/data`,
        context: {
          pageArticles: group
        }
      });

      console.log(`\nCreated data.json with month ${month}.`);
    }
  });

  fs.writeFile(`${DIR}/months.json`, JSON.stringify(months), function(err) {
    if (err) {
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
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const articles = result.data.allArticlesJson.edges.map(({ node }) => node);

    return createArticlesPagination(articles);
  });
};

function createJSON({
  context: { pageArticles, currentPage, totalPages },
  path
}) {
  if (!fs.existsSync(DIR)) {
    fs.mkdirSync(DIR);
  }

  const filePath = `${DIR}${path}.json`;
  const dataToSave = JSON.stringify(pageArticles);

  fs.writeFile(filePath, dataToSave, function(err) {
    if (err) {
      return console.log(err);
    }
  });
}
