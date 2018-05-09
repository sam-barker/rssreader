import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Sidebar, Posts} from './children'
import Styles from './styles.scss'

class RSSReader extends Component {
  render () {
    return (
      <div className={Styles.rssReaderContainer}>
        <Sidebar
          feeds={this.props.feeds}
          addFeed={this.props.addFeed}
          removeFeed={this.props.removeFeed}
          searchFeeds={this.props.searchFeeds} />
        <Posts sortedFeeds={this.props.sortedFeeds} />
      </div>
    )
  }
}

RSSReader.defaultProps = {
  feeds: [],
  sortedFeeds: []
}

RSSReader.propTypes = {
  feeds: PropTypes.arrayOf(PropTypes.object),
  sortedFeeds: PropTypes.arrayOf(PropTypes.object),
  addFeed: PropTypes.func.isRequired,
  removeFeed: PropTypes.func.isRequired,
  searchFeeds: PropTypes.func.isRequired
}

export default RSSReader
