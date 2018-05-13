/*
 global describe
 global expect
 global it
*/
import Types from '../../../../src/data/actionTypes'
import {searchForFeed} from '../../../../src/data/actionCreators/search'

describe('Action Creator tests', () => {
  it('creates an searchForFeed action', () => {
    const name = 'test'
    expect(searchForFeed(name)).toEqual({
      type: Types.SEARCH_FOR_FEED,
      name
    })
  })
})
