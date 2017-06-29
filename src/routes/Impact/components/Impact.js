import React from 'react'
import PropTypes from 'prop-types'

import Repos from './Repos'

class Impact extends React.PureComponent {
  constructor() {
    super();
  }
  componentDidMount() {
    if (this.props.name.trim().length > 0) {
      this.props.onSubmit();
    }
  }
  render() {
    const { loading, error, repos } = this.props;
    const reposData = {
      loading, 
      error,
      repos
    };
    return (
      <div >
          <form onSubmit={this.props.onSubmit}>
            <input
                  id="name"
                  type="text"
                  placeholder="mxstbr"
                  value={this.props.name}
                  onChange={this.props.onChangeUsername}
                />
          </form>
          <Repos {...reposData} />
      </div>
    )
  }
}

Impact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
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

export default Impact
