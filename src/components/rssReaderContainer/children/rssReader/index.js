import React, {Component} from 'react'
import {Sidebar, Feed} from './children'
import Styles from './styles.scss'

class RSSReader extends Component {
  render () {
    return (
      <div className={Styles.rssReaderContainer}>
        <Sidebar />
        <Feed />
      </div>
    )
  }
}

export default RSSReader
