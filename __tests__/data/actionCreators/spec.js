/*
 global describe
 global expect
 global it
*/
import Types from '../../../src/data/actionTypes'
import {
  addFeedStart,
  addFeedSuccess,
  removeFeedSuccess,
  searchForFeed,
  displayError,
  dismissError
} from '../../../src/data/actionCreators'

describe('Action Creator tests', () => {
  it('creates an addFeedStart action', () => {
    expect(addFeedStart()).toEqual({type: Types.ADD_FEED_START})
  })

  it('creates an addFeedSuccess action', () => {
    const feed = {name: 'test', url: 'https://e.com'}
    expect(addFeedSuccess(feed)).toEqual({
      type: Types.ADD_FEED_SUCCESS,
      feed
    })
  })

  it('creates a display error action', () => {
    const text = 'My error'
    expect(displayError(text)).toEqual({
      type: Types.DISPLAY_ERROR,
      text
    })
  })

  it('creates a dismiss error action', () => {
    expect(dismissError()).toEqual({
      type: Types.DISMISS_ERROR
    })
  })

  it('creates an removeFeedSuccess action', () => {
    const feed = {name: 'test', url: 'https://e.com'}
    expect(removeFeedSuccess(feed)).toEqual({
      type: Types.REMOVE_FEED_SUCCESS,
      feed
    })
  })

  it('creates an searchForFeed action', () => {
    const name = 'test'
    expect(searchForFeed(name)).toEqual({
      type: Types.SEARCH_FOR_FEED,
      name
    })
  })
})
