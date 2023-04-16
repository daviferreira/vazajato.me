import classnames from 'classnames';
import React, { useState } from 'react';

import Pdf from './pdf.svg';
import Spreadsheet from './spreadsheet.svg';

import * as styles from './styles.module.css';

let timer;

const Footer = () => {
  const [active, setActive] = useState(false);

  const handleMouseLeave = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setActive(false);
    }, 600);
  };

  const handleMouseEnter = () => {
    clearTimeout(timer);
    setActive(true);
  };

  return (
    <>
      <a
        className={styles.spreadsheet}
        href="https://docs.google.com/spreadsheets/d/1y9bixq_sZ5TOwwqfoagRKX4zCm1Ka6hXbch9qN6OtKI"
        rel="noopener noreferrer"
        target="_blank"
        title="Planilha de dados"
      >
        <Spreadsheet />
      </a>
      <a
        className={styles.pdf}
        href="https://www.dropbox.com/sh/a2wijlhwezq8yyo/AABTEZI4XWfjPEmHeKT7bbcYa?dl=0"
        rel="noopener noreferrer"
        target="_blank"
        title="Arquivos com diálogos"
      >
        <Pdf />
      </a>
      <div
        className={classnames(styles.about, {
          [styles.active]: active,
        })}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        title="Sobre este site"
      >
        ?
      </div>
      <footer
        className={classnames(styles.root, {
          [styles.active]: active,
        })}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a
          href="https://www.github.com/daviferreira/vazajato.me"
          rel="noopener noreferrer"
          target="_blank"
        >
          Desenvolvido
        </a>
        &nbsp;com&nbsp;
        <span className={styles.communist}>
          <span>&hearts;</span>
          <span>☭</span>
        </span>
        &nbsp;por&nbsp;
        <a
          href="https://www.daviferreira.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Davi Ferreira
        </a>
      </footer>
    </>
  );
};

export default Footer;
