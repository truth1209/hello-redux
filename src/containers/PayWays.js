import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import WalletPayList from '../components/WalletPayList'
import OtherPayList from '../components/OtherPayList'

const PayWays = ({order}) => (
  <div>
  <WalletPayList />
  <hr/>
  <OtherPayList />
  </div>
)

PayWays.propTypes = {
  orderAmount: PropTypes.number,
  orderAmount4Show:PropTypes.string,
  hideDetail: PropTypes.bool
}

const mapStateToProps = (state) => (
  {}
)

export default connect(
  mapStateToProps
)(PayWays)
