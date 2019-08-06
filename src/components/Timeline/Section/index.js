import classnames from 'classnames';
import _ from 'lodash';
import moment from 'moment';

import React from 'react';
import PropTypes from 'prop-types';

import Day from './Day';

import styles from './styles.module.css';

const Section = ({ articles, isFirst, month }) => {
  const groupedArticles = _.groupBy(articles, 'publishDate');

  let count = -1;

  return (
    <div className={styles.root}>
      <h2
        className={classnames(styles.month, {
          [styles.first]: isFirst
        })}
      >
        {moment(month, 'YYYY-MM').format('MMMM')}
      </h2>
      {_.map(groupedArticles, (articles, day) => {
        count++;
        return (
          <Day articles={articles} day={day} key={day} left={!!(count % 2)} />
        );
      })}
    </div>
  );
};

Section.propTypes = {
  articles: PropTypes.array.isRequired,
  isFirst: PropTypes.bool,
  month: PropTypes.string.isRequired
};

export default Section;
