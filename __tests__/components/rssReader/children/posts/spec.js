/*
   global expect
   global it
   global describe
 */
import React from 'react'
import {mount} from 'enzyme'
import {Posts} from '../../../../../src/components/rssReader/children'

describe('<Posts /> tests', () => {
  it('renders correctly', () => {
    const props = {
      sortedFeeds: [
        {
          name: 'Name',
          title: 'Title',
          url: 'https://example.com',
          link: 'https://another-example.com',
          description: 'this is an example for testing',
          pubDate: '2018-01-01 10:10',
          guid: 'https://google.com'
        },
        {
          name: 'Name2',
          title: 'Title2',
          url: 'https://example.com',
          link: 'https://another-example.com',
          description: 'this is an example for testing 2',
          pubDate: '2018-01-01 10:10',
          guid: 'https://google.com'
        }
      ]
    }
    const enzymeWrapper = mount(<Posts {...props} />)
    expect(enzymeWrapper).toBeDefined()
  })
})
