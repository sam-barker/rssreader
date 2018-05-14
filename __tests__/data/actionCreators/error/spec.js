/*
 global describe
 global expect
 global it
*/

import Types from '../../../../src/data/actionTypes'
import {dismissError, displayError} from '../../../../src/data/actionCreators/error'

describe('Action Creator tests - Error', () => {
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
})
