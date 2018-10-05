export const GET_ISSUES = 'GET_ISSUES'
export const FLUSH_ISSUES = 'FLUSH_ISSUES'

export const ReceiveIssues = (issues) => ({
  type: GET_ISSUES,
  issues: issues
})

export const FlushIssues = () => ({
  type: FLUSH_ISSUES
})

const apiUrl = 'https://api.github.com/repos/facebook/react/issues'

export const FetchIssues = () => async (dispatch) => {

  let options = {
    method: 'GET'
  }

  fetch(apiUrl, options)
    .then(response => response.json())
    .then(issues => dispatch(ReceiveIssues(issues)))
    .catch(error => {
      throw(error)
    })
}


