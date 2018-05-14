/*
 global describe
 global expect
 global it
 global jest
*/
import Types from '../../../../src/data/actionTypes'
import {removeFeedSuccess, removeFeed} from '../../../../src/data/actionCreators/remove'

describe('Action Creator tests - Remove', () => {
  it('creates an removeFeedSuccess action', () => {
    const feed = {name: 'test', url: 'https://e.com'}
    expect(removeFeedSuccess(feed)).toEqual({
      type: Types.REMOVE_FEED_SUCCESS,
      feed
    })
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
})
