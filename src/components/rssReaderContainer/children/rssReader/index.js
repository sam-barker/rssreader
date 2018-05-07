import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Sidebar, Feed} from './children'
import Styles from './styles.scss'

class RSSReader extends Component {
  render () {
    return (
      <div className={Styles.rssReaderContainer}>
        <Sidebar
          feeds={this.props.feeds}
          addFeed={this.props.addFeed}
          removeFeed={this.props.removeFeed}/>
        <Feed />
      </div>
    )
  }
}

RSSReader.defaultProps = {
  feeds: []
}

RSSReader.propTypes = {
  feeds: PropTypes.arrayOf(PropTypes.object),
  addFeed: PropTypes.func.isRequired,
  removeFeed: PropTypes.func.isRequired
}

export default RSSReader
