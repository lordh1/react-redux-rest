import { SET_ISSUE, GET_ISSUE, FLUSH_ISSUE } from '../actions/issue'


const initState = null

export const issue = (state = initState, action) => {
    switch (action.type) {
      case GET_ISSUE:
        return action.issue
      case SET_ISSUE:
        return action.issue
      case FLUSH_ISSUE:
        return initState
      default:
        return state
    }
  }
