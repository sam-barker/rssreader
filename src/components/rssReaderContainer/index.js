import {connect} from 'react-redux'
import {RSSReader} from './children'
import {addFeed, removeFeed, searchForFeed} from '../../data/actionCreators'
import {debounce} from './helpers'

/**
 * Returns props to use for the connected UserList
 *
 * @param {object} state - The current state of the store
 */
const mapStateToProps = (state) => {
  return {
    feeds: !state.searchTerm ? state.feeds : state.feeds.filter((feed) => {
      return feed.name.includes(state.searchTerm)
    })
  }
}

/**
 * Returns function props to use for the connected UserList
 * @param {function} dispatch - The dispatch function used to trigger actions
 */
const mapDispatchToprops = (dispatch) => {
  return {
    addFeed: (name, url) => { dispatch(addFeed(name, url)) },
    removeFeed: (name, url) => { dispatch(removeFeed(name, url)) },
    searchFeeds: debounce((name) => { dispatch(searchForFeed(name)) }, 500)
    // getPostsForUser: (id) => { dispatch(fetchPosts(id)) },
    // getCommentsForPost: (userId, postId) => { dispatch(fetchComments(userId, postId)) }
  }
}

const RSSReaderContainer = connect(
  mapStateToProps,
  mapDispatchToprops
)(RSSReader)

export default RSSReaderContainer
