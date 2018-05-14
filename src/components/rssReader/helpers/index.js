import debounce from 'debounce'
import {addFeed} from '../../../data/actionCreators/add'
import {removeFeed} from '../../../data/actionCreators/remove'
import {searchForFeed} from '../../../data/actionCreators/search'
import {dismissError, displayError} from '../../../data/actionCreators/error'

/**
 * Filters out feeds that dont match a name
 * @param {string} name - The feed name to filter against
 * @param {object} feed - The feed to check
 */
function filterFeedByname (name, feed) {
  return feed.name.toLowerCase().includes(name.toLowerCase())
}

/**
 * Filters out items that dont match a name
 * @param {string} name - The feed name to filter against
 * @param {object} item - The item to check
 */
function filterItemsByName (name, item) {
  return item.name.toLowerCase().includes(name.toLowerCase())
}

/**
 * Obtains the feeds to use in the app
 * @param {object} state - The app state
 */
function getFeeds (state) {
  return !state.searchTerm
    ? state.feeds
    : state.feeds.filter(
      filterFeedByname.bind(this, state.searchTerm)
    )
}

/**
 * Obtains the items to use in the app
 * @param {object} state - The app state
 */
function getItems (state) {
  return !state.searchTerm
    ? state.items
    : state.items.filter(
      filterItemsByName.bind(this, state.searchTerm)
    )
}

/**
 * Maps state to props
 * @param {object} state - The app state
 */
export function mapStateToProps (state) {
  const feeds = getFeeds(state)
  const items = getItems(state)
  const {error} = state
  return {
    feeds,
    items,
    error
  }
}

/**
 * Maps dispatch to props
 * @param {function} dispatch - The dispatcher
 */
export function mapDispatchToProps (dispatch) {
  return {
    addFeed: (name, url) => { dispatch(addFeed(name, url)) },
    removeFeed: (name, url) => { dispatch(removeFeed(name, url)) },
    searchFeeds: debounce((name) => { dispatch(searchForFeed(name)) }, 500),
    dismissError: () => { dispatch(dismissError()) },
    displayError: (text) => { dispatch(displayError(text)) }
  }
}
