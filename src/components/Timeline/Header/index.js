import classnames from 'classnames';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';
import ShareBar from '../../ShareBar';
import Sort from '../../Sort';
import Source from '../..//Timeline/Section/Article/Source';

import sources from '../../../data/sources';
import topics from '../../../../public/pages/topics';

import Arrow from './arrow.svg';
import Clear from './clear-circle.svg';

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
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className={styles.mobile}>
        <div className={styles.menuToggle}>
          {!checked && (!isAll || !!topic) && (
            <div className={styles.badge}>1</div>
          )}
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span />
          <span />
          <span />
          <div className={styles.mobileMenu}>
            <div className={styles.select}>
              <label>Filtrar por veículo</label>
              <select
                id="filter-source"
                onChange={(e) => {
                  onSourceChange(e.target.value);
                  setChecked(false);
                }}
                value={source}
              >
                <option value="all">Todos os veículos</option>
                {sourceKeys.map((key) => (
                  <option key={key} value={key}>
                    {sources[key].name}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.select}>
              <label>Filtrar por tópico</label>
              <select
                id="filter-topic"
                onChange={(e) => {
                  onTopicChange(e.target.value || null);
                  setChecked(false);
                }}
                value={topic || ''}
              >
                {<option value="">Todos os tópicos</option>}
                {topics.map((key) => (
                  <option key={key}>{key}</option>
                ))}
              </select>
            </div>
            <button
              className={styles.mobileSort}
              onClick={(e) => {
                onSortChange(e);
                setChecked(false);
              }}
            >
              {order === 'asc'
                ? 'Mais recentes primeiro'
                : 'Mais antigas primeiro'}
            </button>
          </div>
        </div>
        <div className={styles.share}>
          <ShareBar />
        </div>
      </div>
      <div className={styles.root}>
        <div className={styles.filter}>
          {!isAll && (
            <span
              className={styles.clear}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onSourceChange('all');
              }}
            >
              <Clear />
            </span>
          )}
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
          {!!topic && (
            <span
              className={styles.clear}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onTopicChange(null);
              }}
            >
              <Clear />
            </span>
          )}
          <Menu>
            <MenuButton className={styles.button}>
              <span>{topic || 'Filtrar por tópico'}</span>
              <span aria-hidden>
                <Arrow className={styles.arrow} />
              </span>
            </MenuButton>
            <MenuList className={styles.menu}>
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
    </>
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
