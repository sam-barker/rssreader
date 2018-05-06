import {
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchPostsStart
} from '../../../../src/data/actionCreators/posts'
import ActionTypes from '../../../../src/data/actionTypes'

describe('Post Actions', () => {
  it('Can create a success action', () => {
    const posts = [{
      id: 1,
    }]
    const userId = '1'
    const expected = {
      type: ActionTypes.FETCH_POSTS_SUCCESS,
      posts,
      userId
    }

    expect(fetchPostsSuccess(posts, userId))
      .toEqual(expected)
  })

  it('can create a failure action', () => {
    const error = {
      text: 'Example error'
    }

    const expected = {
      type: ActionTypes.FETCH_POSTS_FAILURE,
      error
    }

    expect(fetchPostsFailure(error))
      .toEqual(expected)
  })

  it('can create a start action', () => {
    const expected = {
      type: ActionTypes.FETCH_POSTS_START
    }
    expect(fetchPostsStart())
      .toEqual(expected)
  })
})