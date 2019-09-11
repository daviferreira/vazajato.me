import classnames from 'classnames';
import groupBy from 'lodash.groupby';
import map from 'lodash.map';
import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';

import Section from './Section';
import Sort from '../Sort';

import data from '../../../static/data/2019-09.json';

import styles from './styles.module.css';

const MONTHS = ['2019-09', '2019-08', '2019-07', '2019-06'];

const Timeline = () => {
  const [order, setOrder] = useState('desc');
  const [articles, setArticles] = useState(data);
  const [months, setMonths] = useState(MONTHS.slice(1));
  const [hasNext, setHasNext] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const onSortChange = () => {
    window.scrollTo(0, 0);

    const nextOrder = order === 'asc' ? 'desc' : 'asc';

    if (nextOrder === 'asc') {
      setArticles([]);
      setMonths(MONTHS.slice().reverse());
    } else {
      setArticles(data);
      setMonths(MONTHS.slice(1));
    }

    setIsLoading(false);
    setHasNext(true);
    setOrder(nextOrder);
  };

  const groupedArticles = groupBy(
    order === 'desc' ? articles.slice().reverse() : articles,
    ({ publishDate }) => publishDate.slice(0, 7)
  );

  const onChange = inView => {
    if (!isLoading && inView) {
      return fetchArticles();
    }
  };

  const fetchArticles = async () => {
    setIsLoading(true);
    let response;

    try {
      response = await fetch(`/data/${months[0]}.json`);

      const nextArticles = await response.json();

      const nextMonths = months.slice(1);

      setIsLoading(false);
      setHasNext(!!nextMonths.length);
      setArticles(
        order === 'asc'
          ? articles.concat(nextArticles)
          : nextArticles.concat(articles)
      );
      setMonths(nextMonths);
    } catch (err) {
      setIsLoading(false);
    }
  };

  let count = 0;
  let articlesCount = 0;

  return (
    <>
      <Sort onClick={onSortChange} order={order} />
      <section
        className={classnames(styles.root, {
          [styles.loaded]: !hasNext
        })}
      >
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
      {hasNext && (
        <InView
          as="div"
          className={styles.loaderContainer}
          onChange={onChange}
          rootMargin="800px 0px"
        >
          <div className={styles.loader}>
            <div />
            <div />
            <div />
          </div>
        </InView>
      )}
    </>
  );
};

export default Timeline;
