import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash.map';

import Sort from '../../Sort';

import { SOURCES } from '../constants';

import styles from './styles.module.css';

const sourceKeys = Object.keys(SOURCES).sort();

const Header = ({ onSourceChange, onSortChange, order, source }) => (
  <div className={styles.root}>
    <div className={styles.filter}>
      <label htmlFor="filter-source">Filtrar por veículo:</label>
      <select
        defaultValue={source}
        id="filter-source"
        onChange={e => onSourceChange(e.target.value)}
      >
        <option key="all" value="all">
          Todos
        </option>
        {map(sourceKeys, key => (
          <option key={key} value={key}>
            {SOURCES[key].name}
          </option>
        ))}
      </select>
    </div>
    <Sort onClick={onSortChange} order={order} />
  </div>
);

Header.propTypes = {
  onSourceChange: PropTypes.func,
  onSortChange: PropTypes.func,
  order: PropTypes.oneOf(['asc', 'desc']),
  source: PropTypes.oneOf(sourceKeys.concat(['all'])).isRequired
};

export default Header;
