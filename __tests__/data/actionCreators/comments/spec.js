import {
  fetchCommentsSuccess,
  fetchCommentsFailure,
  fetchCommentsStart
} from '../../../../src/data/actionCreators/comments'
import ActionTypes from '../../../../src/data/actionTypes'

describe('Comment Actions', () => {
  it('Can create a success action', () => {
    const comments = [{
      id: 1,
      message: 'test'
    }]
    const userId = '1'
    const postId = '1'
    const expected = {
      type: ActionTypes.FETCH_COMMENTS_SUCCESS,
      comments,
      userId,
      postId
    }

    expect(fetchCommentsSuccess(comments, userId, postId))
      .toEqual(expected)
  })

  it('can create a failure action', () => {
    const error = {
      text: 'Example error'
    }

    const expected = {
      type: ActionTypes.FETCH_COMMENTS_FAILURE,
      error
    }

    expect(fetchCommentsFailure(error))
      .toEqual(expected)
  })

  it('can create a start action', () => {
    const expected = {
      type: ActionTypes.FETCH_COMMENTS_START
    }
    expect(fetchCommentsStart())
      .toEqual(expected)
  })
})