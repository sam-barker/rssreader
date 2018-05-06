import {
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchUsersStart
} from '../../../../src/data/actionCreators/users'
import ActionTypes from '../../../../src/data/actionTypes'

describe('User Actions', () => {
  it('Can create a success action', () => {
    const users = [{
      id: 1,
    }]
    const userId = '1'
    const expected = {
      type: ActionTypes.FETCH_USERS_SUCCESS,
      users
    }

    expect(fetchUsersSuccess(users, userId))
      .toEqual(expected)
  })

  it('can create a failure action', () => {
    const error = {
      text: 'Example error'
    }

    const expected = {
      type: ActionTypes.FETCH_USERS_FAILURE,
      error
    }

    expect(fetchUsersFailure(error))
      .toEqual(expected)
  })

  it('can create a start action', () => {
    const expected = {
      type: ActionTypes.FETCH_USERS_START
    }
    expect(fetchUsersStart())
      .toEqual(expected)
  })
})