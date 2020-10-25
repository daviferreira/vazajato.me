import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash.map';

import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';
import Sort from '../../Sort';

import sources from '../../../data/sources';

import Arrow from './arrow.svg';

import '@reach/menu-button/styles.css';
import styles from './styles.module.css';

const sourceKeys = Object.keys(sources).sort();

const Header = ({ onSourceChange, onSortChange, order, source }) => (
  <div className={styles.root}>
    <div className={styles.filter}>
      <Menu>
        {({ isExpanded }) => (
          <>
            <MenuButton
              className={styles.button}
              style={
                source !== 'all'
                  ? {
                      boxShadow: `inset 0 -3px 0 ${sources[source].color}`,
                    }
                  : undefined
              }
            >
              <span>
                {source === 'all' ? 'Todos os veículos' : sources[source].name}{' '}
              </span>
              <span aria-hidden>
                <Arrow
                  className={classnames(styles.arrow, {
                    [styles.expanded]: isExpanded,
                  })}
                />
              </span>
            </MenuButton>
            <MenuList className={styles.menu}>
              <MenuItem
                className={styles.item}
                key="all"
                onSelect={() => onSourceChange('all')}
              >
                Todos os veículos
              </MenuItem>
              {map(sourceKeys, (key) => (
                <MenuItem
                  className={styles.item}
                  key={key}
                  onSelect={() => onSourceChange(key)}
                >
                  {sources[key].name}
                </MenuItem>
              ))}
            </MenuList>
          </>
        )}
      </Menu>
    </div>
    <Sort onClick={onSortChange} order={order} />
  </div>
);

Header.propTypes = {
  onSourceChange: PropTypes.func,
  onSortChange: PropTypes.func,
  order: PropTypes.oneOf(['asc', 'desc']),
  source: PropTypes.oneOf(sourceKeys.concat(['all'])).isRequired,
};

export default Header;
