import ActionTypes from '../actionTypes'
import Reqwest from '@spbarker/re-qwest'
import {toJson} from './helpers'

const API_LOCATION = 'https://api.rss2json.com/v1/api.json?rss_url='

function fetchFeed (dispatch, name, url) {
  const onSuccess = (json) => { dispatch(addFeedSuccess({ ...json, name, url })) }
  const onCatch = () => dispatch(addFeedFailure(url))
  dispatch(addFeedStart())
  Reqwest({
    method: 'GET',
    url: `${API_LOCATION}${url}`
  })
    .then(toJson).then(onSuccess).catch(onCatch)
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
    dispatch(displayError(`Failed to add feed at ${url}. Please double check the URL.`))
  }
}

export function addFeed (name, url) {
  return function (dispatch) {
    dispatch(fetchFeed(dispatch, name, url))
  }
}

export function removeFeedSuccess (feed) {
  return {
    type: ActionTypes.REMOVE_FEED_SUCCESS,
    feed
  }
}

export function removeFeed (name, url) {
  return function (dispatch) {
    dispatch(removeFeedSuccess({name, url}))
  }
}

export function searchForFeed (name) {
  return {
    type: ActionTypes.SEARCH_FOR_FEED,
    name
  }
}

export function dismissError () {
  return {
    type: ActionTypes.DISMISS_ERROR
  }
}

export function displayError (text) {
  return {
    type: ActionTypes.DISPLAY_ERROR,
    text
  }
}
