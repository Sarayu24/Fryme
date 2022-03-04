import React from 'react'

import styles from './quote.module.css'

const Quote = ({ text, author }) => (
  <div>
    <blockquote id="text">{`"${text}"`}</blockquote>
    <p id="author" className={styles.author}>{`- ${author}`}</p>
  </div>
)

export default Quote
