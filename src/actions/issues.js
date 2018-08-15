export const GET_ISSUES = 'GET_ISSUES'
export const FLUSH_ISSUES = 'FLUSH_ISSUES'
export const ISSUES_SORT_DATE = 'ISSUES_SORT_DATE'

export const ReceiveIssues = (issues) => ({
  type: GET_ISSUES,
  issues: issues
})

export const FlushIssues = () => ({
  type: FLUSH_ISSUES
})

export const IssuesSortDate = () => ({
  type: ISSUES_SORT_DATE
})

const apiUrl = 'https://api.github.com/repos/facebook/react/issues'

export const FetchIssues = () => async (dispatch) => {

  var options = {
    method: 'GET'
  }

  fetch(apiUrl, options)
    .then(response => response.json())
    .then(issues => dispatch(ReceiveIssues(issues)))
    .catch(error => {
      throw(error)
    })
}


