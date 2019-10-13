import classnames from 'classnames';
import React, { useState } from 'react';

import styles from './styles.module.css';

const Footer = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        className={classnames(styles.about, {
          [styles.active]: active
        })}
        onClick={() => setActive(!active)}
        title="Sobre este site"
      >
        ?
      </div>
      <footer
        className={classnames(styles.root, {
          [styles.active]: active
        })}
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
