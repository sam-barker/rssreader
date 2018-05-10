/*
   global expect
   global it
   global describe
   global jest
 */
import React from 'react'
import {mount} from 'enzyme'
import {SubmitButton} from '../../../../src/components/ui'

describe('<SubmitButton /> tests', () => {
  const props = {onClick: jest.fn()}
  const enzymeWrapper = mount(<SubmitButton {...props} />)

  it('renders correctly', () => {
    expect(enzymeWrapper).toBeDefined()
  })

  it('fires on click when clicked', () => {
    const button = enzymeWrapper.find('button').at(0)
    button.simulate('click')
    expect(props.onClick).toHaveBeenCalled()
  })
})
