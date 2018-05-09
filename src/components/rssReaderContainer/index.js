import {connect} from 'react-redux'
import {RSSReader} from './children'
import {addFeed, removeFeed, searchForFeed} from '../../data/actionCreators'
import {debounce} from './helpers'

function getFeeds (state) {
  return !state.searchTerm ? state.feeds : state.feeds.filter((feed) => {
    return feed.name.includes(state.searchTerm)
  })
}

function sortFeeds (feeds) {
  console.log('feed to reduce:', feeds)
  const reduced = feeds.reduce((accumulator, nextFeed) => {
    const items = nextFeed.items.map((item) => {
      return {
        ...item,
        name: nextFeed.name,
        url: nextFeed.url,
        link: nextFeed.feed.link
      }
    })
    return accumulator.concat(items)
  }, [])

  return reduced.sort((a, b) => {
    const d1 = Date.parse(a.pubDate)
    const d2 = Date.parse(b.pubDate)
    return d1 < d2
  })
}

/**
 * Returns props to use for the connected UserList
 *
 * @param {object} state - The current state of the store
 */
const mapStateToProps = (state) => {
  const feeds = getFeeds(state)
  const sortedFeeds = sortFeeds(feeds)
  return {
    feeds,
    sortedFeeds
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
