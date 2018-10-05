import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Issues from './components/Issues'
import Issue from './components/Issue'
import './css/App.css'

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const { issue } = this.props
    let tab

    if(issue) {
      tab = <Issue />
    }
    else {
      tab = <Issues />
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
  const { issue } = state

  return {
      issue
  }
}

export default connect(mapStateToProps)(App)
