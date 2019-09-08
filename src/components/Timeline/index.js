import groupBy from 'lodash.groupby';
import map from 'lodash.map';
import memoize from 'lodash.memoize';
import React, { useState } from 'react';

import Section from './Section';
import Sort from '../Sort';

import articles from '../../data/articles.json';

import styles from './styles.module.css';

const groupArticles = memoize(order =>
  groupBy(
    order === 'asc' ? articles : articles.slice().reverse(),
    ({ publishDate }) => publishDate.slice(0, 7)
  )
);

const Timeline = () => {
  const [order, setOrder] = useState('desc');

  const groupedArticles = groupArticles(order);

  let count = 0;
  let articlesCount = 0;

  return (
    <>
      <Sort
        onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}
        order={order}
      />
      <section className={styles.root}>
        {map(groupedArticles, (group, month) => {
          const articles = groupBy(group, 'publishDate');

          const component = (
            <Section
              group={articles}
              isFirst={count === 0}
              key={month}
              month={month}
              previousCount={articlesCount}
            />
          );
          count++;

          articlesCount += Object.keys(articles).length;

          return component;
        })}
      </section>
    </>
  );
};

export default Timeline;
