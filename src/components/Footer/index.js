import React from "react"

import styles from "./styles.module.css"

const Footer = () => (
  <footer className={styles.root}>
    <a
      href="https://www.github.com/daviferreira/vazajato.me"
      rel="noopener noreferrer"
      target="_blank"
    >
      Desenvolvido
    </a>{" "}
    com <span className={styles.communist}>☭</span> por{" "}
    <a
      href="https://www.twitter.com/davitferreira"
      rel="noopener noreferrer"
      target="_blank"
    >
      Davi Ferreira
    </a>
  </footer>
)

export default Footer
