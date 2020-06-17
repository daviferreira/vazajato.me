import classnames from 'classnames';

import React from 'react';
import PropTypes from 'prop-types';

import Article from '../Article';

import sources from '../../../../data/sources';

import styles from './styles.module.css';

const formatDate = (date, year) => {
  const [, month, day] = date.split('-');

  return `${day}/${month}${year ? `/${year}` : ''}`;
};

const Day = ({ articles, day, left, year }) => {
  return (
    <div
      className={classnames(styles.root, {
        [styles.left]: left,
        [styles.right]: !left
      })}
    >
      <div className={styles.indicator}>
        <div className={styles.circle} />
        <time className={styles.day} timestamp={day}>
          {formatDate(day, year)}
        </time>
      </div>
      <div className={styles.articles}>
        {articles.map(({ id, source, title, url }) => {
          const { color } = sources[source];

          return (
            <div
              className={styles.article}
              key={id}
              style={{
                borderBottomColor: color
              }}
            >
              <Article id={id} source={source} title={title} url={url} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

Day.propTypes = {
  articles: PropTypes.array.isRequired,
  day: PropTypes.string.isRequired,
  left: PropTypes.bool,
  year: PropTypes.string
};

export default Day;
