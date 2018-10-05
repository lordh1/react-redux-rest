import {
  GET_ISSUES,
  FLUSH_ISSUES
} from '../actions/issues'

const sortByDate = (array) => {
  return array.sort(function(a,b) {
    return new Date(b.created_at) - new Date(a.created_at)
  })
}

const fromLastWeek = (array) => {
  return array.filter((element) => {
    return new Date(element.created_at) > new Date(new Date().setDate(new Date().getDate()-7))
  })
}

const dateReplaceTZ = (array) => {
  for(let key in array) {
    array[key].created_at = array[key].created_at.replace('T', ' ').replace('Z', '')
  }
  return array
}

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