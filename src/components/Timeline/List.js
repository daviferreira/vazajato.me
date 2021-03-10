import React, { useState } from 'react';
import PropTypes from 'prop-types';

import groupBy from 'lodash.groupby';
import map from 'lodash.map';

import Footer from '../Footer';
import Section from './Section';
import Header from './Header';

import styles from './styles.module.css';

const List = ({ articles, location, source, topic }) => {
  const [order, setOrder] = useState('desc');
  const [groupedArticles, setGroupedArticles] = useState(
    groupBy(articles, ({ publishDate }) => publishDate.slice(0, 7))
  );
  let count = 0;
  let articlesCount = 0;

  const handleSortChange = () => {
    const nextOrder = order === 'asc' ? 'desc' : 'asc';
    setOrder(nextOrder);
    setGroupedArticles(
      groupBy(
        nextOrder === 'asc' ? articles.slice().reverse() : articles,
        ({ publishDate }) => publishDate.slice(0, 7)
      )
    );
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.container}>
      <Header
        location={location}
        onSortChange={handleSortChange}
        order={order}
        source={source || 'all'}
        topic={topic}
      />

      <section className={styles.root}>
        {map(groupedArticles, (group, month) => {
          const sectionArticles = groupBy(group, 'publishDate');

          const component = (
            <Section
              group={sectionArticles}
              isFirst={count === 0}
              key={month}
              month={month}
              order={order}
              previousCount={articlesCount}
            />
          );

          count++;

          articlesCount += Object.keys(sectionArticles).length;

          return component;
        })}
      </section>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

List.propTypes = {
  articles: PropTypes.array.isRequired,
  location: PropTypes.object,
  source: PropTypes.string,
  topic: PropTypes.string,
};

export default List;
