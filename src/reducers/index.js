import { combineReducers } from 'redux'
import pay from './pay'


const rootReducer = combineReducers({
  payLoad:pay
})

export default rootReducer