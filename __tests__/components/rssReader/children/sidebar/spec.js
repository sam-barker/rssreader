/*
   global expect
   global it
   global describe
   global jest
 */
import React from 'react'
import {mount} from 'enzyme'
import {Sidebar} from '../../../../../src/components/rssReader/children'

describe('<Sidebar /> tests', () => {
  it('renders correctly', () => {
    const props = {
      feeds: [
        {
          name: 'Name',
          title: 'Title',
          url: 'https://example.com',
          link: 'https://another-example.com',
          description: 'this is an example for testing',
          pubDate: '2018-01-01 10:10'
        },
        {
          name: 'Name2',
          title: 'Title2',
          url: 'https://example.com',
          link: 'https://another-example.com',
          description: 'this is an example for testing 2',
          pubDate: '2018-01-01 10:10'
        }
      ],
      addFeed: jest.fn(),
      removeFeed: jest.fn(),
      searchFeeds: jest.fn(),
      displayError: jest.fn()
    }
    const enzymeWrapper = mount(<Sidebar {...props} />)
    expect(enzymeWrapper).toBeDefined()
  })
})
