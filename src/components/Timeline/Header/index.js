import classnames from 'classnames';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import { navigate } from 'gatsby-link';

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

const Header = ({ onSortChange, order, source, topic }) => {
  const isAll = source === 'all';
  const [checked, setChecked] = useState(false);

  const handleSourceChange = (nextSource) => {
    if (nextSource === source) {
      return;
    }

    window.scrollTo(0, 0);
    const url =
      !nextSource || nextSource === 'all' ? '/' : `/veiculos/${nextSource}`;
    navigate(url);
  };

  const handleTopicChange = (nextTopic) => {
    if (nextTopic === topic) {
      return;
    }

    window.scrollTo(0, 0);
    const url =
      !nextTopic || nextTopic === 'all'
        ? '/'
        : `/topicos/${slugify(nextTopic).toLowerCase().trim()}`;
    navigate(url);
  };

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
                  handleSourceChange(e.target.value);
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
                  handleTopicChange(e.target.value || null);
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
            <ul className={styles.files}>
              <li>
                <a
                  className={styles.spreadsheet}
                  href="https://docs.google.com/spreadsheets/d/1y9bixq_sZ5TOwwqfoagRKX4zCm1Ka6hXbch9qN6OtKI"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Planilha de dados
                </a>
              </li>
              <li>
                <a
                  className={styles.pdf}
                  href="https://www.dropbox.com/sh/kpuj56unr06o7dp/AADJDKujsfgtEWFE-_2SAMwia?dl=0"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Arquivos com diálogos
                </a>
              </li>
            </ul>
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
                handleSourceChange('all');
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
                        onSelect={() => handleSourceChange(key)}
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
                handleTopicChange(null);
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
                  onSelect={() => handleTopicChange(key)}
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
  onSortChange: PropTypes.func,
  order: PropTypes.oneOf(['asc', 'desc']),
  source: PropTypes.oneOf(sourceKeys.concat(['all'])).isRequired,
  topic: PropTypes.string,
};

export default Header;
