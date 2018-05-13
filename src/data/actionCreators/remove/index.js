import ActionTypes from '../../actionTypes'

/**
 * Fires a REMOVE_FEED_SUCCESS action
 * @param {object} feed - the feed to remove
 */
export function removeFeedSuccess (feed) {
  return {
    type: ActionTypes.REMOVE_FEED_SUCCESS,
    feed
  }
}

/**
 * Removes a feed
 * @param {string} name - The name of the feed to remove
 * @param {string} url - The url of the feed to remove
 */
export function removeFeed (name, url) {
  return function (dispatch) {
    dispatch(removeFeedSuccess({name, url}))
  }
}
