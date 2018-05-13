import ActionTypes from '../actionTypes'
import initialState from '../initialState'
import {removeFeed} from './helpers'

/**
 * Reducer for the application
 * @param {object} state - Application state
 * @param {object} action - The action being fired
 */
export default function (state = initialState, action = {type: ActionTypes.NONE}) {
  switch (action.type) {
    case ActionTypes.REMOVE_FEED_SUCCESS:
      return {...state, feeds: removeFeed(state, action)}
    case ActionTypes.ADD_FEED_SUCCESS:
      return {...state, feeds: state.feeds.concat(action.feed)}
    case ActionTypes.SEARCH_FOR_FEED:
      return {...state, searchTerm: action.name}
    case ActionTypes.DISMISS_ERROR:
      return {...state, error: null}
    case ActionTypes.DISPLAY_ERROR:
      return {...state, error: action.text}
    default:
      return state
  }
}
