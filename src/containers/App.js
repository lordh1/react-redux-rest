import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  FetchIssues,
  FlushIssues
} from '../actions/issues'
import {
  FetchIssue,
  FlushIssue
} from '../actions/issue'
import Issues from '../components/Issues'
import Issue from '../components/Issue'
import '../css/App.css'

class App extends Component {
  static propTypes = {
    issues: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  state = {
    activeTab: 'issues'
  }

  componentDidMount() {
    this.getIssues()
  }

  getIssues = () => {
    const { dispatch } = this.props
    dispatch(FlushIssues())
    dispatch(FetchIssues())
  }

  showIssues = () => {
    this.setState({activeTab: 'issues'})
  }

  showIssue = () => {
    this.setState({activeTab: 'issue'})
  }

  setIssueRequest = (url) => {
    const { dispatch } = this.props
    dispatch(FlushIssue())
    dispatch(FetchIssue(url))
    this.setState({activeTab: 'issue'})
  }

  render() {
    const { issues, issue } = this.props
    const { activeTab } = this.state
    let tab

    if(activeTab === 'issues') {
      tab = <Issues
        issues = {issues}
        setIssueRequest = {this.setIssueRequest}
      />
    } else if(activeTab === 'issue') {
      tab = <Issue issue={issue} back={this.showIssues} />
    }

    return (
      <div className='Main'>
        <div>
          {tab}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { issues, issue } = state

  return {
    issues, issue
  }
}

export default connect(mapStateToProps)(App)
