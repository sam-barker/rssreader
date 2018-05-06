import React from 'react'
import { mount } from 'enzyme'
import User from '../../../../../src/components/userListContainer/userList/user'

describe('User', () => {
  it('should be defined', () => {
    expect(User).toBeDefined()
  })

  describe('rendering', () => {
    const getPostsForUser = jest.fn()
    const getCommentsForPost = jest.fn()

    it('Should render a user', () => {
      const user = mount(
        <User
          id={'1'}
          email={'example email'}
          username={'example_username'}
          getPostsForUser={getPostsForUser}
          getCommentsForPost={getCommentsForPost}
          posts={[{
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
          }]} />
      )
      expect(user).toBeDefined()
      expect(user.text().includes('example_username'))
        .toEqual(true)
    })

    it('Calls a function on user click', () => {
      const user = mount(
        <User
          id={'1'}
          email={'example email'}
          username={'example_username'}
          getPostsForUser={getPostsForUser}
          getCommentsForPost={getCommentsForPost} />
      )
      expect(user).toBeDefined()
      user.find('div').at(1).simulate('click')
      expect(getPostsForUser).toHaveBeenCalled()
    })
  })
})