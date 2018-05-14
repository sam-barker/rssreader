import ActionTypes from '../../actionTypes'
import Reqwest from '@spbarker/re-qwest'
import {API_LOCATION} from '../constants'
import {displayError} from '../error'

/**
 * Fires an ADD_FEED_START action
 */
export function addFeedStart () {
  return {
    type: ActionTypes.ADD_FEED_START
  }
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
    dispatch(addFeedStart())
    const onSuccess = (json) => dispatch(addFeedSuccess({ ...json, name, url }))
    const onCatch = () => dispatch(addFeedFailure(url))
    Reqwest({method: 'GET', url: `${API_LOCATION}${url}`})
      .then(JSON.parse)
      .then(onSuccess)
      .catch(onCatch)
  }
}
