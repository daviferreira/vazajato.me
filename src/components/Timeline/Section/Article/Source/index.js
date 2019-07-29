import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';

import sources from '../../../../../data/sources';

import styles from './styles.module.css';

const Source = ({ source }) => {
  const { name } = sources[source];

  return (
    <div className={styles.root}>
      <div className={styles.avatar}>
        <Image alt={name} id={source} />
      </div>
      <div className={styles.name}>{name}</div>
    </div>
  );
};

Source.propTypes = {
  source: PropTypes.string.isRequired
};

export default Source;
