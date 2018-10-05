import React from 'react'
import PropTypes from 'prop-types'
import '../css/Issue.css'
import { FlushIssue } from '../actions/issue'
import connect from "react-redux/es/connect/connect";

class Issue extends React.PureComponent {
    static propTypes = {
        issue: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    flushIssue = (issue) => {
        const { dispatch } = this.props
        dispatch(FlushIssue(issue))
    }

    render () {
        const { issue } = this.props
        return (
            <div>
                <h1 className="Issue__h1">{issue.title}</h1>
                <div dangerouslySetInnerHTML={{__html: issue.body}}></div>
                <div className="Issue__ButtonsArea">
                    <button className="Issue__button" onClick={this.flushIssue}>Back</button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    const { issue } = state

    return {
        issue
    }
}

export default connect(mapStateToProps)(Issue)
