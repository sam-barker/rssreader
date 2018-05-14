import React from 'react'
import PropTypes from 'prop-types'
import {Feed} from './children'
import Styles from './styles.scss'

/**
 * Renders a feed
 * @param {object} feed - The feed to render
 */
function renderFeed (props, feed) {
  return !feed ? null : (
    <Feed
      key={`feed_${feed.name}`}
      {...feed}
      removeFeed={props.removeFeed} />
  )
}

/**
 * FeedList component
 */
function FeedList (props) {
  return (
    <ul className={Styles.feedListContainer}>
      {props.feeds.map(renderFeed.bind(this, props))}
    </ul>
  )
}

FeedList.defaultProps = {
  feeds: []
}

FeedList.propTypes = {
  feeds: PropTypes.arrayOf(PropTypes.object),
  removeFeed: PropTypes.func.isRequired
}

export default FeedList
