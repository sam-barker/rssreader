import ActionTypes from '../../actionTypes'

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
