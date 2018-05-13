/*
 global describe
 global expect
 global it
 global jest
*/
import Types from '../../../src/data/actionTypes'
import fetchMock from 'fetch-mock'
import {
  addFeed,
  addFeedStart,
  addFeedSuccess,
  addFeedFailure,
  removeFeedSuccess,
  searchForFeed,
  displayError,
  dismissError,
  removeFeed
} from '../../../src/data/actionCreators'

describe('Action Creator tests', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

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

  it('creates an addFeedFailure action', () => {
    const dispatch = jest.fn()
    const url = 'example'
    const dispatchable = addFeedFailure(url)
    dispatchable(dispatch)
    expect(dispatch).toHaveBeenCalledWith(
      displayError(`Failed to add feed at ${url}. Please double check the URL.`)
    )
  })

  it('creates an removeFeed action', () => {
    const dispatch = jest.fn()
    const name = 'name'
    const url = 'example'
    const dispatchable = removeFeed(name, url)
    dispatchable(dispatch)
    expect(dispatch).toHaveBeenCalledWith(
      removeFeedSuccess({name, url})
    )
  })

  it('creates an addFeed action', () => {
    const dispatch = jest.fn()
    const name = 'name'
    const url = 'example'
    const dispatchable = addFeed(name, url)
    fetchMock.getOnce(`https://api.rss2json.com/v1/api.json?rss_url=${url}`, {
      body: {name: 'test'}, headers: { 'content-type': 'application/json' }
    })
    dispatchable(dispatch)
    expect(dispatch).toHaveBeenCalled()
  })
})
