/**
 * Filters feeds out that match name and url
 * @param {object} action - The action containing the feed details to filter against
 * @param {object} feed - The current feed in the filter
 */
function feedFilter (action, feed) {
  return feed.name !== action.feed.name || feed.url !== action.feed.url
}

/**
 * Removes a feed from application state
 * @param {object} state - the application state
 * @param {object} action - The action fired
 */
export function removeFeed (state, action) {
  return state.feeds.filter(feedFilter.bind(this, action))
}
