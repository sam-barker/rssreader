/*
   global expect
   global it
   global describe
 */
import React from 'react'
import {mount} from 'enzyme'
import {SearchIcon} from '../../../../src/components/icons'

describe('<SearchIcon /> tests', () => {
  it('renders correctly', () => {
    const enzymeWrapper = mount(<SearchIcon />)
    expect(enzymeWrapper).toBeDefined()
  })
})
