import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPostsIfNeeded } from '../actions/pay'
import PayHeader from './PayHeader'
import PayWays from './PayWays'


class Pay extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPostsIfNeeded)
  }

  render() {
    const { isFetching } = this.props
    return (
      <div>
        {
          isFetching ? <h2>Loading...</h2>: 
          <div>{/*子组件在此扩展*/}
            <PayHeader />
            <PayWays />
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { payLoad } = state
  const isFetching = (payLoad && payLoad.isFetching === false) ? false : true
  return {
    isFetching
  }
}

export default connect(mapStateToProps)(Pay)
