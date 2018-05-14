/**
 * Filters feeds out that match name and url
 * @param {object} action - The action containing the feed details to filter against
 * @param {object} feed - The current feed in the filter
 */
function feedFilter (action, feed) {
  return feed.name !== action.feed.name || feed.url !== action.feed.url
}

/**
 * Filters items out that match name and url
 * @param {object} action - The action containing the item details to filter against
 * @param {object} feed - The current item in the filter
 */
function itemFilter (action, item) {
  return item.name !== action.feed.name || item.url !== action.feed.url
}

/**
 * Compares two date strings
 * @param {string} item1 - The first item
 * @param {string} item2 - the second item
 */
function compareDate (item1, item2) {
  const d1 = Date.parse(item1.pubDate)
  const d2 = Date.parse(item2.pubDate)
  return d2 - d1
}

/**
 * Removes a feed from application state
 * @param {object} state - the application state
 * @param {object} action - The action fired
 */
export function removeFeed (state, action) {
  return state.feeds.filter(feedFilter.bind(this, action))
}

/**
 * Removes items from application state
 * @param {object} state - the application state
 * @param {object} action - The action fired
 */
export function removeItems (state, action) {
  return state.items.filter(itemFilter.bind(this, action))
}

/**
 * Adds a feed
 * @param {object} state - The state of the application
 * @param {object} action - the action fired
 */
export function addFeed (state, action) {
  const {feed} = action
  return state.feeds.concat(feed)
}

/**
 * Adds the items from a feed to the app state
 * @param {object} state - The application state
 * @param {object} action - The action fired
 */
export function addItems (state, action) {
  const {feed} = action
  const items = feed.items.map((item) => {
    return {
      ...item,
      name: feed.name,
      url: feed.url,
      link: feed.feed.link
    }
  })

  const allItems = state.items.concat(items)
  return allItems.sort(compareDate)
}
