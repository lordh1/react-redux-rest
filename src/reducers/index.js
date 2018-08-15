import { combineReducers } from 'redux'
import { issues } from './issues'
import { issue } from './issue'

const rootReducer = combineReducers({
  issues,
  issue
})

export default rootReducer
