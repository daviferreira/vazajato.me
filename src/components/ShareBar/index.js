import React from "react"
import PropTypes from "prop-types"

import FacebookIcon from "./facebook.svg"
import TwitterIcon from "./twitter.svg"

import styles from "./styles.module.css"

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
      href={`https://twitter.com/share?text=${text}&url=${url}&hashtags=VazaJato&via=davitferreira`}
      rel="noopener noreferrer"
      target="_blank"
      title="Compartilhe no Twitter"
    >
      <TwitterIcon />
    </a>
  </div>
)

ShareBar.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
}

ShareBar.defaultProps = {
  text: "Linha do tempo da VazaJato",
  url: "https://www.vazajato.me",
}

export default ShareBar
