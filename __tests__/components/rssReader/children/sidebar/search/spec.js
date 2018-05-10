/*
   global expect
   global it
   global describe
   global jest
 */
import React from 'react'
import {mount} from 'enzyme'
import {Search} from '../../../../../../src/components/rssReader/children/sidebar/children'

describe('<Search /> tests', () => {
  const props = {
    searchFeeds: jest.fn()
  }

  const enzymeWrapper = mount(<Search {...props} />)

  it('renders correctly', () => {
    expect(enzymeWrapper).toBeDefined()
  })

  it('calls the searchFeeds callback on change', () => {
    const search = enzymeWrapper.find('input').at(0)
    search.simulate('focus')
    search.simulate('change', { target: { value: 'test' } })
    expect(props.searchFeeds).toHaveBeenCalledWith('test')
  })
})
