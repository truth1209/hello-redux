import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const PayHeader = ({ payRequest }) => (
  <div>
    <div>
      我是PayHeader
    </div>
  </div>
)

PayHeader.propTypes = {
  payRequest: PropTypes.object
}

const mapStateToProps = (state) => (
  {
    payRequest: state.payLoad.response.payRequest
  }
)

export default connect(
  mapStateToProps
)(PayHeader)
