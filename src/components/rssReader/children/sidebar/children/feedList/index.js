import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Feed} from './children'
import Styles from './styles.scss'

class FeedList extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  renderFeed (feed) {
    return !feed ? null : (
      <Feed
        key={`feed_${feed.name}`}
        {...feed}
        removeFeed={this.props.removeFeed} />
    )
  }

  render () {
    return (
      <ul className={Styles.feedListContainer}>
        {this.props.feeds.map(this.renderFeed.bind(this))}
      </ul>
    )
  }
}

FeedList.defaultProps = {
  feeds: []
}

FeedList.propTypes = {
  feeds: PropTypes.arrayOf(PropTypes.object),
  removeFeed: PropTypes.func.isRequired
}

export default FeedList
