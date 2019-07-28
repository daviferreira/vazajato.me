import classnames from "classnames"
import moment from "moment"

import React from "react"
import PropTypes from "prop-types"

import Article from "../Article"

import styles from "./styles.module.css"

const Day = ({ articles, day, left }) => {
  return (
    <div
      className={classnames(styles.root, {
        [styles.left]: left,
        [styles.right]: !left,
      })}
    >
      <div className={styles.indicator}>
        <div className={styles.circle}></div>
        <time className={styles.day} timestamp={day}>
          {moment(day, "YYYY-MM-DD").format("DD/MMM")}
        </time>
      </div>
      <div className={styles.articles}>
        {articles.map(({ id, source, title, url }) => (
          <div className={styles.article} key={id}>
            <Article id={id} source={source} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  )
}

Day.propTypes = {
  articles: PropTypes.array.isRequired,
  day: PropTypes.string.isRequired,
  left: PropTypes.bool,
}

export default Day