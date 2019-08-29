import classnames from 'classnames';
import _ from 'lodash';
import moment from 'moment';

import React from 'react';
import PropTypes from 'prop-types';

import Day from './Day';

import styles from './styles.module.css';

const Section = ({ group, isFirst, month, previousCount }) => {
  let count = previousCount + 1;

  return (
    <div className={styles.root}>
      <h2
        className={classnames(styles.month, {
          [styles.first]: isFirst
        })}
      >
        {moment(month, 'YYYY-MM').format('MMMM')}
      </h2>
      {_.map(group, (articles, day) => {
        count++;
        return (
          <Day articles={articles} day={day} key={day} left={!!(count % 2)} />
        );
      })}
    </div>
  );
};

Section.propTypes = {
  group: PropTypes.object.isRequired,
  isFirst: PropTypes.bool,
  month: PropTypes.string.isRequired,
  previousCount: PropTypes.number
};

export default Section;
