import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import Arrows from './sorting-arrows.svg';

import * as styles from './styles.module.css';

const Sort = ({ onClick, order }) => (
  <button
    className={classnames(styles.root, {
      [styles[order]]: order,
    })}
    onClick={onClick}
    title={order === 'asc' ? 'Mais recentes primeiro' : 'Mais antigas primeiro'}
  >
    <Arrows />
  </button>
);

Sort.propTypes = {
  onClick: PropTypes.func,
  order: PropTypes.oneOf(['asc', 'desc']),
};

export default Sort;
