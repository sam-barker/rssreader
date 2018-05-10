import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Sidebar, Posts} from './children'
import Styles from './styles.scss'
import {
  mapStateToProps,
  mapDispatchToProps
} from './helpers'

export class RSSReader extends Component {
  static defaultProps = {
    feeds: [],
    sortedFeeds: []
  }

  static propTypes = {
    feeds: PropTypes.arrayOf(PropTypes.object),
    sortedFeeds: PropTypes.arrayOf(PropTypes.object),
    addFeed: PropTypes.func.isRequired,
    removeFeed: PropTypes.func.isRequired,
    searchFeeds: PropTypes.func.isRequired
  }

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

export default connect(mapStateToProps, mapDispatchToProps)(RSSReader)