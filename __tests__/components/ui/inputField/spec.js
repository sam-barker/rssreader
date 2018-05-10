/*
   global expect
   global it
   global describe
   global jest
 */
import React from 'react'
import {mount} from 'enzyme'
import {InputField} from '../../../../src/components/ui'

describe('<InputField /> tests', () => {
  it('renders correctly', () => {
    const props = {
      onChange: jest.fn()
    }
    const enzymeWrapper = mount(<InputField {...props} />)
    expect(enzymeWrapper).toBeDefined()
  })

  it('fires on change callback when field value is edited', () => {
    const props = {
      onChange: jest.fn()
    }

    const enzymeWrapper = mount(<InputField {...props} />)
    const input = enzymeWrapper.find('input').at(0)
    input.simulate('click')
    input.simulate('change', { target: { value: 'Hello' } })
    expect(props.onChange).toHaveBeenCalled()
  })

  it('focuses', () => {
    const props = {
      onChange: jest.fn()
    }

    const enzymeWrapper = mount(<InputField {...props} />)
    const container = enzymeWrapper.find('input').at(0)
    container.simulate('focus')
    expect(enzymeWrapper.state('focus')).toBe(true)
  })
})
