/*
 global describe
 global expect
 global it
 global jest
 global afterEach
*/

import Types from '../../../../src/data/actionTypes'
import fetchMock from 'fetch-mock'
import {addFeed, addFeedSuccess, addFeedFailure} from '../../../../src/data/actionCreators/add'
import {displayError} from '../../../../src/data/actionCreators/error'

describe('Action Creator tests - Add', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates an addFeedSuccess action', () => {
    const feed = {name: 'test', url: 'https://e.com'}
    expect(addFeedSuccess(feed)).toEqual({
      type: Types.ADD_FEED_SUCCESS,
      feed
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

  it('creates an addFeed action', () => {
    const dispatch = jest.fn()
    const name = 'name'
    const url = 'example'
    const dispatchable = addFeed(name, url)
    fetchMock.getOnce(`https://api.rss2json.com/v1/api.json?rss_url=${url}`, {
      body: {name: 'test', url}, status: 200, headers: { 'content-type': 'application/json' }
    })
    dispatchable(dispatch)
    expect(dispatch).toHaveBeenCalled()
  })
})
