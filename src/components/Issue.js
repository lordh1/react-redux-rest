import React from 'react'
import PropTypes from 'prop-types'
import '../css/Issue.css'

const Issue = ({ issue, back }) => (
  <div>
      <h1 className="Issue__h1">{issue.title}</h1>
      <div dangerouslySetInnerHTML={{__html: issue.body}}></div>
      <div className="Issue__ButtonsArea"><button className="Issue__button" onClick={back}>Back</button></div>
  </div>
)

Issue.propTypes = {
  issue: PropTypes.object.isRequired,
  back: PropTypes.func.isRequired,
}

export default Issue
