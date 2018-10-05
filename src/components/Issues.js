import React from 'react'
import PropTypes from 'prop-types'
import '../css/Issues.css'
import {SetIssue} from "../actions/issue";
import connect from "react-redux/es/connect/connect";
import {FetchIssues} from "../actions/issues";

class Issues extends React.PureComponent {
    static propTypes = {
        issues: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.getIssues()
    }

    getIssues = () => {
        const { dispatch } = this.props
        dispatch(FetchIssues())
    }

    setIssue = (issue) => {
        const { dispatch } = this.props
        dispatch(SetIssue(issue))
    }

    render() {
        const { issues } = this.props

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
                <tr key={i} onClick={() => this.setIssue(issue) }>
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

const mapStateToProps = state => {
    const { issues, issue } = state

    return {
        issues, issue
    }
}

export default connect(mapStateToProps)(Issues)
