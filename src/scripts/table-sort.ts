// Column sorting for the table view. Rows keep their original index to
// break ties stably. The toolbar's sort button orders the table by date.
const collator = new Intl.Collator('pt-BR', {
  sensitivity: 'base',
  ignorePunctuation: true,
});

export function initTableSort(root: Element, newestFirst: boolean) {
  const table = root.querySelector('table');
  if (!table) return;

  const body = table.tBodies[0];
  const rows = [...body.rows];
  rows.forEach((row, i) => (row.dataset.index = String(i)));

  const sort = (key: string, ascending: boolean) => {
    const sign = ascending ? 1 : -1;
    rows.sort(
      (a, b) =>
        sign * collator.compare(a.dataset[key], b.dataset[key]) ||
        sign * (Number(a.dataset.index) - Number(b.dataset.index)),
    );
    body.append(...rows);
    table.querySelectorAll<HTMLElement>('th[data-column]').forEach((th) => {
      if (th.dataset.column === key) {
        th.setAttribute('aria-sort', ascending ? 'ascending' : 'descending');
      } else {
        th.removeAttribute('aria-sort');
      }
    });
  };

  table
    .querySelectorAll<HTMLButtonElement>('[data-sort-column]')
    .forEach((button) =>
      button.addEventListener('click', () =>
        sort(
          button.dataset.sortColumn,
          button.closest('th').getAttribute('aria-sort') !== 'ascending',
        ),
      ),
    );

  document.addEventListener('timeline:sort', (event) =>
    sort('date', !(event as CustomEvent<boolean>).detail),
  );

  if (newestFirst) sort('date', false);
}
