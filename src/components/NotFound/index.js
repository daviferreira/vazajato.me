import { Link } from 'gatsby';
import React from 'react';

import * as styles from './styles.module.css';

const NotFound = () => (
  <div className={styles.root}>
    <h1 className={styles.title}>Página não encontrada.</h1>
    <Link to="/">Linha do tempo</Link>
  </div>
);

export default NotFound;
