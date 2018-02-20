import React from 'react'
import LoadingBar from 'react-redux-loading-bar'

const Header = () => (
  <header>
    <h1> this is header</h1>
    <LoadingBar style={{ backgroundColor: 'red', height: '25px' }} />
  </header>
)

export default Header
