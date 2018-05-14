/*
   global expect
   global it
   global describe
 */
import {hasFeed} from '../../../../../../src/components/rssReader/children/sidebar/helpers'

describe('Sidebar helpers', () => {
  it('determines whether ot not the feed is already present', () => {
    const feeds = [{name: 'Hello', url: 'https://e.com'}]
    expect(!!hasFeed(feeds, 'Hello', 'https://e.com')).toEqual(true)
    expect(!!hasFeed(feeds, 'Hello', 'https://f.com')).toEqual(true)
    expect(!!hasFeed(feeds, 'goodbye', 'https://e.com')).toEqual(true)
  })
})
