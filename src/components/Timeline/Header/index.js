import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';
import Sort from '../../Sort';
import Source from '../..//Timeline/Section/Article/Source';

import sources from '../../../data/sources';
import topics from '../../../../public/pages/topics';

import Arrow from './arrow.svg';

import '@reach/menu-button/styles.css';
import styles from './styles.module.css';

const sourceKeys = Object.entries(sources)
  .sort(([, a], [, b]) => a.name.localeCompare(b.name))
  .map(([key]) => key);

const Header = ({
  onSourceChange,
  onSortChange,
  onTopicChange,
  order,
  source,
  topic,
}) => {
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
                  {isAll ? 'Filtrar por veículo' : <Source source={source} />}
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
      <div className={styles.filter}>
        <Menu>
          <MenuButton className={styles.button}>
            <span>{topic || 'Filtrar por tópico'}</span>
            <span aria-hidden>
              <Arrow className={styles.arrow} />
            </span>
          </MenuButton>
          <MenuList className={classnames(styles.menu, styles.topics)}>
            {!!topic && (
              <MenuItem
                className={classnames(styles.item, styles.all)}
                key="all"
                onSelect={() => onTopicChange(null)}
              >
                <span>Todos os tópicos</span>
              </MenuItem>
            )}
            {topics.map((key) => (
              <MenuItem
                className={styles.item}
                key={key}
                onSelect={() => onTopicChange(key)}
              >
                <div>{key}</div>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>
      <div className={styles.sort}>
        <Sort onClick={onSortChange} order={order} />
      </div>
    </div>
  );
};

Header.propTypes = {
  onSourceChange: PropTypes.func,
  onSortChange: PropTypes.func,
  onTopicChange: PropTypes.func,
  order: PropTypes.oneOf(['asc', 'desc']),
  source: PropTypes.oneOf(sourceKeys.concat(['all'])).isRequired,
  topic: PropTypes.string,
};

export default Header;
