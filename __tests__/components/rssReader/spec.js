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
    displayError: jest.fn(),
    dismissError: jest.fn()
  }

  const enzymeWrapper = mount(<RSSReader {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('<RSSReader /> tests', () => {
  const {enzymeWrapper} = setup()

  it('renders correctly', () => {
    expect(enzymeWrapper).toBeDefined()
  })

  it('renders an error modal when an error is present', () => {
    const newProps = {error: 'Example error'}
    enzymeWrapper.setProps(newProps)
    enzymeWrapper.update()
    enzymeWrapper.find('Modal').text().includes(newProps.error)
  })
})
