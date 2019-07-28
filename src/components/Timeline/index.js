import _ from "lodash"
import moment from "moment"
import "moment/locale/pt-br"
import React from "react"

import Section from "./Section"

import articles from "../../data/articles.json"

import styles from "./styles.module.css"

moment.locale("pt-BR")

const groupedArticles = _.groupBy(articles, ({ publishDate }) =>
  publishDate.slice(0, 7)
)

const Timeline = () => (
  <section className={styles.root}>
    {_.map(groupedArticles, (group, month) => (
      <Section articles={group} key={month} month={month} />
    ))}
  </section>
)

export default Timeline
