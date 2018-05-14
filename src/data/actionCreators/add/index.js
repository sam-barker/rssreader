import ActionTypes from '../../actionTypes'
import Reqwest from '@spbarker/re-qwest'
import {API_LOCATION} from '../constants'
import {displayError} from '../error'

/**
 * Fetches a single RSS Feed
 * @param {function} dispatch - The dispatch function used for async actions
 * @param {string} name - The RSS feed name
 * @param {string} url - The RSS feed url
 */
function fetchFeed (dispatch, name, url) {
  Reqwest({
    method: 'GET',
    url: `${API_LOCATION}${url}`
  })
    .then((response) => JSON.parse(response))
    .then((json) => {
      dispatch(addFeedSuccess({ ...json, name, url }))
    })
    .catch(() => {
      dispatch(addFeedFailure(url))
    })
}

/**
 * Fires an ADD_FEED_SUCCESS action
 * @param {object} feed - The feed that has uccessfully been added
 */
export function addFeedSuccess (feed) {
  return {
    type: ActionTypes.ADD_FEED_SUCCESS,
    feed
  }
}

/**
 * Fires an action which displays an error when adding a feed fails
 * @param {string} url - The url of the feed that failed to add
 */
export function addFeedFailure (url) {
  return function (dispatch) {
    dispatch(displayError(`Failed to add feed at ${url}. Please double check the URL.`))
  }
}

/**
 * fetches a feed with a given name and url
 * @param {string} name - The name of the feed to add
 * @param {*} url - the url of the feed to add
 */
export function addFeed (name, url) {
  return function (dispatch) {
    fetchFeed(dispatch, name, url)
  }
}
