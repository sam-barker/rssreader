import React from 'react'
import PropTypes from 'prop-types'
import {Search, FeedList, AddFeed} from './children'
import Styles from './styles.scss'
import {hasFeed} from './helpers'

/**
 * Sidebar component
 * @param {object} props - Component props
 */
function Sidebar (props) {
  return (
    <aside className={Styles.sidebar}>
      <div className={Styles.sidebarContent}>
        <Search searchFeeds={props.searchFeeds} />
        <FeedList
          feeds={props.feeds}
          removeFeed={props.removeFeed} />
        <AddFeed
          addFeed={props.addFeed}
          displayError={props.displayError}
          hasFeed={hasFeed.bind(this, props.feeds)} />
      </div>
    </aside>
  )
}

Sidebar.defaultProps = {
  feeds: []
}

Sidebar.propTypes = {
  feeds: PropTypes.arrayOf(PropTypes.object),
  addFeed: PropTypes.func.isRequired,
  removeFeed: PropTypes.func.isRequired,
  searchFeeds: PropTypes.func.isRequired,
  displayError: PropTypes.func.isRequired
}

export default Sidebar
