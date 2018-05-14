import React from 'react'
import PropTypes from 'prop-types'
import Styles from './styles.scss'
import {Post} from './children'

/**
 * Renders a post
 * @param {object} post - The post to render
 */
function renderPost (post) {
  return (
    <Post key={post.title} {...post} />
  )
}

/**
 * Posts component
 * @param {object} props - Component props
 */
function Posts (props) {
  return (
    <div className={Styles.postsContainer}>
      <div className={Styles.posts}>
        {props.items.map(renderPost)}
      </div>
    </div>
  )
}

Posts.defaultProps = {
  items: []
}

Posts.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

export default Posts
