import React from 'react'
import { mount } from 'enzyme'
import Post from '../../../../../src/components/userListContainer/userList/post'

describe('Post', () => {
  it('should be defined', () => {
    expect(Post).toBeDefined()
  })

  it('Should render a post', () => {
    const mockGetComments = jest.fn()
    const post = mount(
      <Post
        id={'1'}
        title={'Example Post Title'}
        date={'2006-03-23T00:00:00.000Z'}
        message={'Example post message'}
        userId={'1'}
        comments={[]}
        getCommentsForPost={mockGetComments} />
    )

    expect(post).toBeDefined()
    expect(post.text().includes('Example Post Title'))
      .toEqual(true)
  })

  it('Will call a function on comment click', () => {
    const mockGetComments = jest.fn()
    const post = mount(
      <Post
        id={'1'}
        title={'Example Post Title'}
        date={'2006-03-23T00:00:00.000Z'}
        message={'Example post message'}
        userId={'1'}
        comments={[{
          id: '1',
          message: 'message',
          date: '2006-03-23T00:00:00.000Z',
          username: 'example'
        }]}
        getCommentsForPost={mockGetComments} />
    )

    expect(post).toBeDefined()
    post.find('div').at(1).simulate('click')
    expect(mockGetComments).toHaveBeenCalled()
  })
})