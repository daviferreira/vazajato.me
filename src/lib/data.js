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

const SHORT_MONTHS = [
  'jan',
  'fev',
  'mar',
  'abr',
  'mai',
  'jun',
  'jul',
  'ago',
  'set',
  'out',
  'nov',
  'dez',
];

// "9 jun 2019", or "9 jun" where a month heading already gives the year.
export const formatDate = (date, { year: withYear = true } = {}) => {
  const [year, month, day] = date.split('-');
  const short = `${Number(day)} ${SHORT_MONTHS[Number(month) - 1]}`;
  return withYear ? `${short} ${year}` : short;
};

// "267 reportagens de 20 veículos, de junho de 2019 a março de 2024"
export function summary(list) {
  const outlets = new Set(list.map((a) => a.source)).size;
  const first = monthTitle(list[0].publishDate.slice(0, 7)).toLowerCase();
  const last = monthTitle(list.at(-1).publishDate.slice(0, 7)).toLowerCase();
  const count = `${list.length} ${list.length === 1 ? 'reportagem' : 'reportagens'}`;
  const from = outlets === 1 ? '' : ` de ${outlets} veículos`;
  const span = first === last ? `, em ${first}` : `, de ${first} a ${last}`;
  return `${count}${from}${span}`;
}

// [{ month, articles }] in chronological order.
export const groupByMonth = (list) =>
  Object.entries(Object.groupBy(list, (a) => a.publishDate.slice(0, 7))).map(
    ([month, articles]) => ({ month, articles }),
  );
