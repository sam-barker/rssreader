/*
 global describe
 global expect
 global it
 global jest
*/
import {toJson} from '../../../../src/data/actionCreators/helpers'

describe('Action Creator helpers', () => {
  it('convertsa string to json', () => {
    const json = '{ "name":"John", "age":31, "city":"New York" }'
    expect(toJson(json)).toEqual({ name: 'John', age: 31, city: 'New York' })
  })
})
