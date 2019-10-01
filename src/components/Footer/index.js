import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Footer = ({ isVisible }) => (
  <footer
    className={classnames(styles.root, { [styles.isVisible]: isVisible })}
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
);

Footer.propTypes = {
  isVisible: PropTypes.bool
};

export default Footer;
