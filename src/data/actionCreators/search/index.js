import ActionTypes from '../../actionTypes'

/**
 * Searches for a feed
 * @param {string} name - The name of the feed being searched for
 */
export function searchForFeed (name) {
  return {
    type: ActionTypes.SEARCH_FOR_FEED,
    name
  }
}
