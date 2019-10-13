import classnames from 'classnames';
import React, { useState } from 'react';

import styles from './styles.module.css';

let timer;

const Footer = () => {
  const [active, setActive] = useState(false);

  const handleMouseLeave = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setActive(false);
    }, 300);
  };

  const handleMouseEnter = () => {
    clearTimeout(timer);
    setActive(true);
  };

  return (
    <>
      <div
        className={classnames(styles.about, {
          [styles.active]: active
        })}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        title="Sobre este site"
      >
        ?
      </div>
      <footer
        className={classnames(styles.root, {
          [styles.active]: active
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
          href="https://www.twitter.com/davitferreira"
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
