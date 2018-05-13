import debounce from 'debounce'
import {addFeed} from '../../../data/actionCreators/add'
import {removeFeed} from '../../../data/actionCreators/remove'
import {searchForFeed} from '../../../data/actionCreators/search'
import {dismissError, displayError} from '../../../data/actionCreators/error'

function filterFeedByname (name, feed) {
  return feed.name.toLowerCase().includes(name.toLowerCase())
}

function getFeeds (state) {
  return !state.searchTerm
    ? state.feeds
    : state.feeds.filter(filterFeedByname.bind(this, state.searchTerm))
}

function sortByDate (date1, date2) {
  const d1 = Date.parse(date1.pubDate)
  const d2 = Date.parse(date2.pubDate)
  return d1 < d2
}

function addFeedPropsToItem (nextFeed, item) {
  return {
    ...item,
    name: nextFeed.name,
    url: nextFeed.url,
    link: nextFeed.feed.link
  }
}

function addFeedProps (accumulator, nextFeed) {
  const items = nextFeed.items.map(addFeedPropsToItem.bind(this, nextFeed))
  return accumulator.concat(items)
}

function sortFeeds (feeds) {
  const reduced = feeds.reduce(addFeedProps, [])
  return reduced.sort(sortByDate)
}

export function mapStateToProps (state) {
  const feeds = getFeeds(state)
  const sortedFeeds = sortFeeds(feeds)
  const error = state.error
  return {
    feeds,
    sortedFeeds,
    error
  }
}

export function mapDispatchToProps (dispatch) {
  return {
    addFeed: (name, url) => { dispatch(addFeed(name, url)) },
    removeFeed: (name, url) => { dispatch(removeFeed(name, url)) },
    searchFeeds: debounce((name) => { dispatch(searchForFeed(name)) }, 500),
    dismissError: () => { dispatch(dismissError()) },
    displayError: (text) => { dispatch(displayError(text)) }
  }
}
