import React from 'react'
import Layout from './components/Layout'

function Introduction() {
  const containerStyles: React.CSSProperties = {
    padding: '80px 20px',
    fontFamily: "'Open Sans', sans-serif",
    fontSize: '16px',
    backgroundSize: 'cover',
    textAlign: 'justify',
    lineHeight: 2,
    letterSpacing: '0',
  }

  const titleStyles: React.CSSProperties = {
    fontSize: '48px',
  }

  const textBlockStyles: React.CSSProperties = {
    maxWidth: '500px',
    textAlign: 'center',
  }

  return (
    <Layout
      direction='column'
      align='center'
      justify='center'
      style={containerStyles}
    >
      <h1 style={titleStyles}>Paver</h1>
      <div style={textBlockStyles}>A react component library</div>
    </Layout>
  )
}

export default Introduction
