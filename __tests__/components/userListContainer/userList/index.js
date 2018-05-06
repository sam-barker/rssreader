import React from 'react'
import { mount } from 'enzyme'
import UserList from '../../../../src/components/userListContainer/userList'

describe('UserList', () => {
  it('should be defined', () => {
    expect(UserList).toBeDefined()
  })

  describe('rendering', () => {
    it ('Should render a list of users', () => {
      const getPostsForUser = jest.fn()
      const getCommentsForPost = jest.fn()
      const users = [{
        id: '1',
        email: 'example email',
        username: 'example_username',
        getPostsForUser: getPostsForUser,
        getCommentsForPost: getCommentsForPost,
        posts: [{
          id: '1',
          title: 'Example Post Title',
          date: '2006-03-23T00:00:00.000Z',
          message: 'Example post message',
          userId: '1',
          comments: [{
            id: '1',
            message: 'message',
            date: '2006-03-23T00:00:00.000Z',
            username: 'example'
          }],
          getCommentsForPost: getCommentsForPost,
        }]
      }]
      const userList = mount(
        <UserList
          users={users}
          getCommentsForPost={getCommentsForPost}
          getPostsForUser={getPostsForUser}/>
      )

      expect(userList).toBeDefined()
      expect(userList.text().includes('example_username'))
        .toEqual(true)
    })
  })
})