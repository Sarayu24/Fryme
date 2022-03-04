import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const baseTitle = 'Fryma'

const Layout = ({ children, title }) => {
  const pageTitle = title ? `${title} - ${baseTitle}` : baseTitle
  return (
    <>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto"
          rel="stylesheet"
        />

        <title>{pageTitle}</title>
      </Helmet>

      <header style={{ color: 'var(--white)', textShadow: '0 3px 5px grey' }}>
        <h1>Fryme mes fjalesh</h1>
      </header>

      <div>{children}</div>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string
}

Layout.defaultProps = {
  title: ''
}

export default Layout
