/*
   global expect
   global it
   global describe
   global jest
 */
import React from 'react'
import {mount} from 'enzyme'
import {FeedList} from '../../../../../../src/components/rssReader/children/sidebar/children'

describe('<FeedList /> tests', () => {
  const props = {
    feeds: [],
    removeFeed: jest.fn()
  }
  const enzymeWrapper = mount(<FeedList {...props} />)

  it('renders correctly', () => {
    expect(enzymeWrapper).toBeDefined()
  })

  it('does not render null objects', () => {
    enzymeWrapper.setProps({feeds: [null]})
    enzymeWrapper.update()
    expect(enzymeWrapper.find('Feed').length).toEqual(0)
  })
})
