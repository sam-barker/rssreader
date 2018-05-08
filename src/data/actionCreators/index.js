import ActionTypes from '../actionTypes'
import Reqwest from '@spbarker/re-qwest'

const API_LOCATION = 'https://api.rss2json.com/v1/api.json?rss_url='

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

export function addFeedFailure (error) {
  return {
    type: ActionTypes.ADD_FEED_FAILURE,
    error
  }
}

export function addFeed (name, url) {
  return function (dispatch) {
    dispatch(addFeedStart())
    Reqwest({
      method: 'GET',
      url: `${API_LOCATION}${url}`
    })
      .then((response) => JSON.parse(response))
      .then((json) => {
        dispatch(addFeedSuccess({ ...json, name, url }))
      })
      .catch((error) => {
        dispatch(addFeedFailure(error))
      })
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
    console.log('dispatching remove success', name, url)
    dispatch(removeFeedSuccess({name, url}))
  }
}

export function searchForFeed (name) {
  return {
    type: ActionTypes.SEARCH_FOR_FEED,
    name
  }
}
