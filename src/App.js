import React, { Component } from 'react'

import Layout from './components/Layout'
import Quote from './components/Quote'

import styles from './App.module.css'
import quotes from './quotes.json'

class App extends Component {
  constructor(props) {
    super(props)

    const quoteIndex = Math.floor(Math.random() * (quotes.length - 1))
    const currentQuote = quotes[quoteIndex]

    this.state = {
      currentQuote
    }
  }

  getNextQuote(event) {
    event.preventDefault()

    this.setState(() => {
      const quoteIndex = Math.floor(Math.random() * (quotes.length - 1))

      return {
        currentQuote: quotes[quoteIndex]
      }
    })
  }

  render() {
    const { text, author } = this.state.currentQuote

    return (
      <Layout>
        <div id="quote-box" className={styles.container}>
          <Quote {...this.state.currentQuote} />

          <div>
            <button
              type="button"
              id="new-quote"
              onClick={e => this.getNextQuote(e)}
            >
              Next Quote
            </button>

          </div>
        </div>
      </Layout>
    )
  }
}

export default App
