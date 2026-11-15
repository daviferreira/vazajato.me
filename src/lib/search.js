// Lowercase and strip accents, so "corrupcao" finds "corrupção".
// Shared by the build (data-search attributes) and the browser (the query).
export const fold = (text) =>
  text
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();

// Everything a reader might type to find an article: title, outlet, topics.
export const searchText = ({ title, topics }, outlet) =>
  fold([title, outlet, ...topics.filter(Boolean)].join(' '));
