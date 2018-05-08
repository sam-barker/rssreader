import ActionTypes from '../actionTypes'
import initialState from '../initialState'

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REMOVE_FEED_START:
    case ActionTypes.ADD_FEED_START:
      return {
        ...state,
        loading: true
      }
    case ActionTypes.REMOVE_FEED_SUCCESS:
      return {
        ...state,
        feeds: state.feeds.map((feed) => {
          if (feed.name !== action.feed.name &&
            feed.url !== action.feed.url) {
            return feed
          }
        })
      }
    case ActionTypes.ADD_FEED_SUCCESS:
      return {
        ...state,
        loading: false,
        feeds: state.feeds.concat(action.feed)
      }
    case ActionTypes.ADD_FEED_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Failed to add feed!'
      }
    case ActionTypes.SEARCH_FOR_FEED:
      return {
        ...state,
        searchTerm: action.name
      }
    default:
      return state
  }
}
