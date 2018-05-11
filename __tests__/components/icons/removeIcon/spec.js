/*
   global expect
   global it
   global describe
 */
import React from 'react'
import {mount} from 'enzyme'
import {RemoveIcon} from '../../../../src/components/icons'

describe('<RemoveIcon /> tests', () => {
  it('renders correctly', () => {
    const enzymeWrapper = mount(<RemoveIcon />)
    expect(enzymeWrapper).toBeDefined()
  })
})
