import {
  GET_ISSUES,
  FLUSH_ISSUES
} from '../actions/issues'

import { dateReplaceTZ, sortByDate, fromLastWeek } from '../../helpers/helpers'

const initState = []
export const issues = (state = initState, action) => {
    switch (action.type) {
      case GET_ISSUES:
        return dateReplaceTZ(sortByDate(fromLastWeek(action.issues)))
      case FLUSH_ISSUES:
        return initState
      default:
        return state
    }
}
