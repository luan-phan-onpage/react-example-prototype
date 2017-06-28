import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './App.scss'

export const App = (props) => (
  <div>
    <div className='page-layout__viewport'>
      {React.Children.toArray(props.children)}
    </div>
  </div>
)
App.propTypes = {
  children: PropTypes.node,
}

export default App
