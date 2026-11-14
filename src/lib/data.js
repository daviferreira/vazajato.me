import slugify from 'slugify';

import articlesData from '../data/articles.json';
import sources from '../data/sources.json';

const articleImages = import.meta.glob('../images/articles/*.jpg', {
  eager: true,
  import: 'default',
});
const sourceImages = import.meta.glob('../images/sources/*', {
  eager: true,
  import: 'default',
});

const byBasename = (images) =>
  Object.fromEntries(
    Object.entries(images).map(([path, image]) => [
      path.split('/').pop().split('.')[0],
      image,
    ]),
  );

const MONTHS = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export { sources };

export const articleImage = byBasename(articleImages);
export const sourceImage = byBasename(sourceImages);

export const slug = (topic) => slugify(topic).toLowerCase().trim();

// Oldest first; articles published on the same day keep their file order.
export const articles = articlesData.toSorted((a, b) =>
  a.publishDate.localeCompare(b.publishDate),
);

export const articlesBySource = Object.groupBy(articles, (a) => a.source);

export const sourceKeys = Object.keys(articlesBySource).sort((a, b) =>
  sources[a].name.localeCompare(sources[b].name, 'pt-BR'),
);

// slug -> { label, articles }
export const topicsBySlug = {};
for (const article of articles) {
  for (const label of new Set(article.topics.filter(Boolean))) {
    const topic = (topicsBySlug[slug(label)] ??= { label, articles: [] });
    topic.articles.push(article);
  }
}

export const topics = Object.entries(topicsBySlug)
  .map(([slug, { label }]) => ({ slug, label }))
  .sort((a, b) => a.label.localeCompare(b.label, 'pt-BR'));

export const monthTitle = (month) => {
  const [year, digits] = month.split('-');
  return `${MONTHS[Number(digits) - 1]} de ${year}`;
};

export const formatDay = (day) => day.split('-').reverse().join('/');

// [{ month, days: [{ day, articles, left }] }], days alternate sides.
export function groupByMonth(list) {
  let count = 0;

  return Object.entries(
    Object.groupBy(list, (a) => a.publishDate.slice(0, 7)),
  ).map(([month, monthArticles]) => ({
    month,
    days: Object.entries(
      Object.groupBy(monthArticles, (a) => a.publishDate),
    ).map(([day, dayArticles]) => ({
      day,
      articles: dayArticles,
      left: count++ % 2 === 1,
    })),
  }));
}
