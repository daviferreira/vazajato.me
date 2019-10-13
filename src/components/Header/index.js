import { Link } from 'gatsby';
import React from 'react';

import ShareBar from '../ShareBar';

import styles from './styles.module.css';

const Header = () => (
  <header className={styles.root}>
    <div className={styles.share}>
      <ShareBar />
    </div>
    <h1 className={styles.title}>
      <Link to="/">#vazajato</Link>
    </h1>
  </header>
);

export default Header;
