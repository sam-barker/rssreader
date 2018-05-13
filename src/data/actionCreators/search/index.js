import ActionTypes from '../../actionTypes'

export function searchForFeed (name) {
  return {
    type: ActionTypes.SEARCH_FOR_FEED,
    name
  }
}
