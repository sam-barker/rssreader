/*
   global expect
   global it
   global describe
 */
import {getDateString} from '../../../../../../../../src/components/rssReader/children/posts/children/post/helpers'

describe('Post helper tests', () => {
  it('gets a correct date string', () => {
    expect(getDateString('2018-05-13 9:05:53')).toEqual(
      'May 13 2018 | 09:05'
    )
  })
})
