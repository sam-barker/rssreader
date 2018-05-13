import ActionTypes from '../../actionTypes'
import Reqwest from '@spbarker/re-qwest'
import {API_LOCATION} from '../constants'
import {displayError} from '../error'

function fetchFeed (dispatch, name, url) {
  dispatch(addFeedStart())
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

export function addFeedStart () {
  return {
    type: ActionTypes.ADD_FEED_START
  }
}

export function addFeedSuccess (feed) {
  return {
    type: ActionTypes.ADD_FEED_SUCCESS,
    feed
  }
}

export function addFeedFailure (url) {
  return function (dispatch) {
    displayError(`Failed to add feed at ${url}. Please double check the URL.`)
  }
}

export function addFeed (name, url) {
  return function (dispatch) {
    fetchFeed(dispatch, name, url)
  }
}
