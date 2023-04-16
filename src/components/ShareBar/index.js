import React from 'react';
import PropTypes from 'prop-types';

import FacebookIcon from './facebook.svg';
import TwitterIcon from './twitter.svg';
import WhatsappIcon from './whatsapp.svg';

import * as styles from './styles.module.css';

const ShareBar = ({ text, url }) => (
  <div className={styles.root}>
    <a
      className={styles.button}
      href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
      rel="noopener noreferrer"
      target="_blank"
      title="Compartilhe no Facebook"
    >
      <FacebookIcon />
    </a>
    <a
      className={styles.button}
      href={`https://twitter.com/share?text=${text}&url=${url}&hashtags=VazaJato`}
      rel="noopener noreferrer"
      target="_blank"
      title="Compartilhe no Twitter"
    >
      <TwitterIcon />
    </a>
    <a
      className={styles.button}
      data-action="share/whatsapp/share"
      href={`whatsapp://send?text=${text} - ${url}`}
      title="Compartilhe no Whatsapp"
    >
      <WhatsappIcon />
    </a>
  </div>
);

ShareBar.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
};

ShareBar.defaultProps = {
  text: 'Linha do tempo da Vaza Jato',
  url: 'https://www.vazajato.me',
};

export default ShareBar;
