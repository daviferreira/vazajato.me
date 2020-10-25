import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';
import Sort from '../../Sort';
import Source from '../..//Timeline/Section/Article/Source';

import sources from '../../../data/sources';

import Arrow from './arrow.svg';

import '@reach/menu-button/styles.css';
import styles from './styles.module.css';

const sourceKeys = Object.entries(sources)
  .sort(([, a], [, b]) => a.name.localeCompare(b.name))
  .map(([key]) => key);

const Header = ({ onSourceChange, onSortChange, order, source }) => {
  const isAll = source === 'all';

  return (
    <div className={styles.root}>
      <div className={styles.filter}>
        <Menu>
          {({ isExpanded }) => (
            <>
              <MenuButton
                className={styles.button}
                style={
                  !isAll
                    ? {
                        boxShadow: `inset 0 -3px 0 ${sources[source].color}`,
                      }
                    : undefined
                }
              >
                <span>
                  {isAll ? 'Todos os veículos' : <Source source={source} />}
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
                {!isAll && (
                  <MenuItem
                    className={classnames(styles.item, styles.all)}
                    key="all"
                    onSelect={() => onSourceChange('all')}
                  >
                    <div className={styles.avatar} />
                    <span>Todos os veículos</span>
                  </MenuItem>
                )}
                {sourceKeys
                  .filter((key) => key !== source)
                  .map((key) => (
                    <MenuItem
                      className={styles.item}
                      key={key}
                      onSelect={() => onSourceChange(key)}
                    >
                      <Source source={key} />
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
};

Header.propTypes = {
  onSourceChange: PropTypes.func,
  onSortChange: PropTypes.func,
  order: PropTypes.oneOf(['asc', 'desc']),
  source: PropTypes.oneOf(sourceKeys.concat(['all'])).isRequired,
};

export default Header;
