/*
   global expect
   global it
   global describe
   global jest
 */
import React from 'react'
import {mount} from 'enzyme'
import {Toggle} from '../../../../src/components/ui'

describe('<SubmitButton /> tests', () => {
  const props = {toggled: false, onToggle: jest.fn()}
  const enzymeWrapper = mount(<Toggle {...props} />)

  it('renders correctly', () => {
    expect(enzymeWrapper).toBeDefined()
  })

  it('fires on toggle when clicked', () => {
    const toggle = enzymeWrapper.find('input').at(0)
    toggle.simulate('click')
    expect(props.onToggle).toHaveBeenCalled()
  })
})
