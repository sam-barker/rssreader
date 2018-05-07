import {connect} from 'react-redux'
import {RSSReader} from './children'
import {addFeed, removeFeed} from '../../data/actionCreators'
// import {fetchPosts} from '../../data/actionCreators/posts'
// import {fetchComments} from '../../data/actionCreators/comments'

/**
 * Returns props to use for the connected UserList
 *
 * @param {object} state - The current state of the store
 */
const mapStateToProps = (state) => {
  return {
    feeds: state.feeds
  }
}

/**
 * Returns function props to use for the connected UserList
 * @param {function} dispatch - The dispatch function used to trigger actions
 */
const mapDispatchToprops = (dispatch) => {
  return {
    addFeed: (name, url) => { dispatch(addFeed(name, url)) },
    removeFeed: (name, url) => { dispatch(removeFeed(name, url)) }
    // getPostsForUser: (id) => { dispatch(fetchPosts(id)) },
    // getCommentsForPost: (userId, postId) => { dispatch(fetchComments(userId, postId)) }
  }
}

const RSSReaderContainer = connect(
  mapStateToProps,
  mapDispatchToprops
)(RSSReader)

export default RSSReaderContainer
