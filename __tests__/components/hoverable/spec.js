import React from 'react'
import { mount } from 'enzyme'
import Hoverable from '../../../src/components/hoverable'

describe('Hoverable', () => {
 it('should be defined', () => {
   expect(Hoverable).toBeDefined()
 })

 it('should change state when hovered on', () => {
   const hoverable = mount(
     <Hoverable colour={'red'}>
      <p>Test</p>
     </Hoverable>
   )

   hoverable.simulate('mouseenter')
   expect(hoverable.state('hovered')).toBe(true)
   hoverable.simulate('mouseleave')
   expect(hoverable.state('hovered')).toBe(false)
 })
})