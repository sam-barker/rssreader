import ActionTypes from '../actionTypes'
import initialState from '../initialState'
import {removeFeed, addFeed, addItems, removeItems} from './helpers'

/**
 * Reducer for the application
 * @param {object} state - Application state
 * @param {object} action - The action being fired
 */
export default function (state = initialState, action = {type: ActionTypes.NONE}) {
  switch (action.type) {
    case ActionTypes.REMOVE_FEED_SUCCESS:
      return {...state, fetching: false, feeds: removeFeed(state, action), items: removeItems(state, action)}
    case ActionTypes.ADD_FEED_SUCCESS:
      return {...state, fetching: false, feeds: addFeed(state, action), items: addItems(state, action)}
    case ActionTypes.SEARCH_FOR_FEED:
      return {...state, searchTerm: action.name}
    case ActionTypes.DISMISS_ERROR:
      return {...state, error: null}
    case ActionTypes.DISPLAY_ERROR:
      return {...state, error: action.text}
    case ActionTypes.ADD_FEED_START:
      return {...state, fetching: true}
    default:
      return state
  }
}
