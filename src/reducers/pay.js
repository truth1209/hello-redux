import {INVALIDATE_PAYLOAD,REQUEST_POSTS, RECEIVE_POSTS} from '../actions/pay'

const pay = (state = { }, action) => {
  switch (action.type) {
    case INVALIDATE_PAYLOAD:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        response:action.response,
        fetchStatus: action.fetchStatus
      }
    default:
      return state
  }
}

export default pay