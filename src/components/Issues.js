import React from 'react'
import PropTypes from 'prop-types'
import '../css/Issues.css'

class Issues extends React.PureComponent {
  showIssue = () => {

  }

  render() {
   const { issues, setIssueRequest } = this.props

   return (
      <div>
        <h1 className="Issues__h1">React Repo Issues</h1>
        <table className="Issues__table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>State</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
          {issues.map((issue, i) =>
            <tr key={i} onClick={() => setIssueRequest(issue.url) }>
              <td>{i + 1}</td>
              <td>{issue.title}</td>
              <td>{issue.state}</td>
              <td>{issue.created_at}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    )
  }
}

Issues.propTypes = {
  issues: PropTypes.array.isRequired
}

export default Issues
