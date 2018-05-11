import {addFeed, removeFeed, searchForFeed} from '../../../data/actionCreators'

function debounce (func, wait) {
  let timeout
  return function () {
    const context = this
    const args = arguments
    const later = function () {
      timeout = null
    }
    const callNow = !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

function filterFeedByname (name, feed) {
  return feed.name.includes(name)
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
  return {
    feeds,
    sortedFeeds
  }
}

export function mapDispatchToProps (dispatch) {
  return {
    addFeed: (name, url) => { dispatch(addFeed(name, url)) },
    removeFeed: (name, url) => { dispatch(removeFeed(name, url)) },
    searchFeeds: debounce((name) => { dispatch(searchForFeed(name)) }, 500)
  }
}
