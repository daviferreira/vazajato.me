import { Link } from "gatsby"
import React from "react"

import styles from "./styles.module.css"

const Header = () => (
  <header className={styles.root}>
    <h1 className={styles.title}>
      <Link to="/">Linha do tempo</Link>
      <br />
      <a
        className={styles.hashtag}
        href="https://twitter.com/search?q=%23VazaJato"
        rel="noopener noreferrer"
        target="_blank"
      >
        #VazaJato
      </a>
    </h1>
  </header>
)

export default Header
