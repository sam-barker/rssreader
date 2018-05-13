import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Search, FeedList, AddFeed} from './children'
import Styles from './styles.scss'

class Sidebar extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <aside className={Styles.sidebar}>
        <div className={Styles.sidebarContent}>
          <Search searchFeeds={this.props.searchFeeds} />
          <FeedList feeds={this.props.feeds} removeFeed={this.props.removeFeed} />
          <AddFeed addFeed={this.props.addFeed} displayError={this.props.displayError} />
        </div>
      </aside>
    )
  }
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
