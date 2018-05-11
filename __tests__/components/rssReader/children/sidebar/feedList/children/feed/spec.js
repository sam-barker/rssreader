/*
   global expect
   global it
   global describe
   global jest
 */
import React from 'react'
import {mount} from 'enzyme'
import {Feed} from '../../../../../../../../src/components/rssReader/children/sidebar/children/feedList/children'

describe('<Feed /> tests', () => {
  const props = {
    name: 'test',
    url: 'https://google.com',
    removeFeed: jest.fn()
  }

  const enzymeWrapper = mount(<Feed {...props} />)

  it('renders correctly', () => {
    expect(enzymeWrapper).toBeDefined()
  })

  it('toggles a feed', () => {
    const toggle = enzymeWrapper.find('input')
    toggle.simulate('click')
    expect(enzymeWrapper.state('toggled')).toBe(true)
  })

  it('calls the remove callback when the remove icon clicked', () => {
    const remove = enzymeWrapper.find('div').last()
    remove.simulate('click')
    expect(props.removeFeed).toHaveBeenCalled()
  })
})
