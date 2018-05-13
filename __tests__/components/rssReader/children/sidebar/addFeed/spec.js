/*
   global expect
   global it
   global describe
   global jest
 */
import React from 'react'
import {mount} from 'enzyme'
import {AddFeed} from '../../../../../../src/components/rssReader/children/sidebar/children'

describe('<AddFeed /> tests', () => {
  it('renders correctly', () => {
    const props = {
      addFeed: jest.fn(),
      displayError: jest.fn()
    }
    const enzymeWrapper = mount(<AddFeed {...props} />)
    expect(enzymeWrapper).toBeDefined()
  })
})
