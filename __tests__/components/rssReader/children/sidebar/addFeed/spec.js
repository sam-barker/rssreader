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
  const props = {
    addFeed: jest.fn(),
    displayError: jest.fn()
  }
  const enzymeWrapper = mount(<AddFeed {...props} />)

  function expectError (state, message) {
    enzymeWrapper.setState(state)
    enzymeWrapper.update()
    enzymeWrapper.instance().onAddSubmit()
    expect(props.displayError).toHaveBeenCalledWith(message)
  }

  it('renders correctly', () => {
    expect(enzymeWrapper).toBeDefined()
  })

  it('calls displayError when inputs are invalid', () => {
    expectError(
      {feedName: '1', url: 'https://google.com'},
      `"1" is not a valid name! Please use alphabetic charcters only.`
    )

    expectError(
      {feedName: 'Example', url: '::::????@@@@:::'},
      `"::::????@@@@:::" is not a valid url!`
    )
  })

  it('adds a feed when inputs are valid', () => {
    const nameInput = enzymeWrapper.find('InputField').find('input').at(0)
    const urlInput = enzymeWrapper.find('InputField').at(1).find('input').at(0)
    const feedName = 'test'
    const url = 'https://google.com'
    nameInput.simulate('change', { target: { value: feedName } })
    urlInput.simulate('change', { target: { value: url} })
    enzymeWrapper.update()
    expect(enzymeWrapper.state()).toEqual({
      feedName,
      url
    })
    const submitButton = enzymeWrapper.find('SubmitButton').at(0).find('button').at(0)
    submitButton.simulate('click')
    expect(props.addFeed).toHaveBeenCalled()
  })
})
