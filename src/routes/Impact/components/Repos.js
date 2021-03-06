import React from 'react'
import PropTypes from 'prop-types'

export function Repos({loading, error, repos}) {
  if (loading) {
    return <p>Loading...</p>;
  } 
  if (error) {
    return <p>Error</p>
  }

  if (repos != false) {
    return <p>Repos List...</p>
  }
  return <p>List of Repos </p>
}
Repos.propTypes = {
  loading: PropTypes.bool,
  error:  PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array
  ])
}

export default Repos
