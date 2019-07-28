import React from "react"
import PropTypes from "prop-types"

import Image from "./Image"

import styles from "./styles.module.css"

const Article = ({ id, source, title, url }) => {
  return (
    <a
      className={styles.root}
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className={styles.image}>
        <div className={styles.imageContainer}>
          <Image alt={title} id={id} />
        </div>
      </div>
      <h2 className={styles.title}>{title}</h2>
      {/* <div className={styles.source}>{source}</div> */}
    </a>
  )
}

Article.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Article
