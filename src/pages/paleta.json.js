// Data for the command palette, fetched the first time it opens so pages
// don't carry every title in their HTML.
import {
  articles,
  formatDate,
  slug,
  sourceKeys,
  sources,
  topics,
} from '../lib/data.js';

export function GET() {
  return Response.json({
    articles: articles.map((a) => ({
      title: a.title,
      url: a.url,
      date: formatDate(a.publishDate),
      source: sources[a.source].name,
      topics: a.topics.filter(Boolean),
    })),
    topics: topics.map(({ label }) => ({
      label,
      href: `/topicos/${slug(label)}`,
    })),
    sources: sourceKeys.map((key) => ({
      label: sources[key].name,
      href: `/veiculos/${key}`,
    })),
  });
}
