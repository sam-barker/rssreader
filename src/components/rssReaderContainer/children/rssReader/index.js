import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Sidebar} from './children'
import Styles from './styles'

class RSSReader extends Component {
  render () {
    return (
      <div style={Styles.container}>
        <Sidebar />
        <div style={{flexGrow: 4}}>
          Something Else
        </div>
      </div>
    )
  }
}

export default RSSReader
