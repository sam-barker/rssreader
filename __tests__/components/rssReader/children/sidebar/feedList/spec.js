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
  it('renders correctly', () => {
    const props = {
      feeds: [],
      removeFeed: jest.fn()
    }
    const enzymeWrapper = mount(<FeedList {...props} />)
    expect(enzymeWrapper).toBeDefined()
  })
})
