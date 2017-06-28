
import React from 'react'
import PropTypes from 'prop-types'

import Repos from './Repos'

class Impact extends React.PureComponent {
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
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
            <Input
                  id="username"
                  type="text"
                  placeholder="mxstbr"
                  value={this.props.username}
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
  changeUserName: PropTypes.func.isRequired,
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
