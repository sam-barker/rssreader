/*
   global jest
   global expect
   global it
   global describe
 */
import React from 'react'
import {mount} from 'enzyme'
import {RSSReader} from '../../../src/components/rssReader'

function setup () {
  const props = {
    feeds: [],
    sortedFeeds: [],
    addFeed: jest.fn(),
    removeFeed: jest.fn(),
    searchFeeds: jest.fn(),
    displayError: jest.fn()
  }

  const enzymeWrapper = mount(<RSSReader {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('<RSSReader /> tests', () => {
  it('renders correctly', () => {
    const {enzymeWrapper} = setup()
    expect(enzymeWrapper).toBeDefined()
  })
})
