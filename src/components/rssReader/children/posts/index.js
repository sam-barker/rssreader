import React from 'react'
import PropTypes from 'prop-types'
import Styles from './styles.scss'
import {Post} from './children'

function renderPost (feed) {
  return (
    <Post key={feed.title} {...feed} />
  )
}

function Posts (props) {
  return (
    <div className={Styles.postsContainer}>
      <div className={Styles.posts}>
        {props.sortedFeeds.map(renderPost)}
      </div>
    </div>
  )
}

Posts.defaultProps = {
  sortedFeeds: []
}

Posts.propTypes = {
  sortedFeeds: PropTypes.arrayOf(PropTypes.object)
}

export default Posts