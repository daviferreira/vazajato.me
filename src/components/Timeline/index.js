import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/pt-br';
import React, { useState } from 'react';

import Section from './Section';
import Sort from '../Sort';

import articles from '../../data/articles.json';

import styles from './styles.module.css';

moment.locale('pt-BR');

const groupArticles = _.memoize(order =>
  _.groupBy(
    order === 'asc' ? articles : articles.reverse(),
    ({ publishDate }) => publishDate.slice(0, 7)
  )
);

const Timeline = () => {
  const [order, setOrder] = useState('asc');

  const groupedArticles = groupArticles(order);

  let count = 0;

  return (
    <>
      <Sort
        onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}
        order={order}
      />
      <section className={styles.root}>
        {_.map(groupedArticles, (group, month) => {
          const component = (
            <Section
              articles={group}
              isFirst={count === 0}
              key={month}
              month={month}
            />
          );
          count++;
          return component;
        })}
      </section>
    </>
  );
};

export default Timeline;
