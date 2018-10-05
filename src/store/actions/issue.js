export const SET_ISSUE = 'SET_ISSUE'
export const GET_ISSUE = 'GET_ISSUE'
export const FLUSH_ISSUE = 'FLUSH_ISSUE'

export const SetIssue = (issue) => ({
  type: SET_ISSUE,
  issue: issue
})

export const FlushIssue = () => ({
  type: FLUSH_ISSUE
})

