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
    return (
      <Feed key={`feed_${feed.name}`} {...feed} />
    )
  }

  render () {
    return (
      <div className={Styles.feedListContainer}>
        {this.props.feeds.map(this.renderFeed)}
      </div>
    )
  }
}

// TODO: Revert to empty array
FeedList.defaultProps = {
  feeds: [
    {
      name: 'Adweek'
    },
    {
      name: 'BBC Tech'
    },
    {
      name: 'Digital Weekly'
    },
    {
      name: 'Marketing Week'
    },
    {
      name: 'Telegraph & Argus'
    },
    {
      name: 'The Guardian Tech'
    },
    {
      name: 'Dezeen'
    },
    {
      name: 'The Times'
    }
  ]
}

FeedList.propTypes = {
  feeds: PropTypes.arrayOf(PropTypes.object)
}

export default FeedList
