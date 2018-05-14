/*
  global describe
  global it
  global expect
*/
import {
  removeFeed,
  removeItems,
  addFeed,
  addItems
} from '../../../../src/data/reducer/helpers'

describe('Reducer helpers', () => {
  it('removes feed data', () => {
    const state = {
      feeds: [
        {
          name: 'Hello',
          url: 'https://google.com'
        },
        {
          name: 'Goodbye',
          url: 'https://facebook.com'
        }
      ]
    }
    const action = {feed: state.feeds[0]}
    expect(removeFeed(state, action)).toEqual([
      state.feeds[1]
    ])
  })

  it('removes item data for a feed', () => {
    const state = {
      items: [
        {
          name: 'item test',
          url: 'https://google.com'
        },
        {
          name: 'item test again',
          url: 'https://facebook.com'
        }
      ]
    }
    const action = {feed: {name: 'item test again', url: 'https://facebook.com'}}
    expect(removeItems(state, action)).toEqual([
      state.items[0]
    ])
  })

  it('adds feed data', () => {
    const state = {
      feeds: [
        {
          name: 'Hello',
          url: 'https://google.com'
        },
        {
          name: 'Goodbye',
          url: 'https://facebook.com'
        }
      ]
    }
    const action = {feed: {name: 'item test again', url: 'https://twitter.com'}}
    expect(addFeed(state, action)).toEqual(state.feeds.concat(action.feed))
  })

  it('adds item data', () => {
    const state = {
      feeds: [
        {
          name: 'Hello',
          url: 'https://google.com'
        },
        {
          name: 'Goodbye',
          url: 'https://facebook.com'
        }
      ],
      items: []
    }
    const action = {
      feed: {
        name: 'Hello',
        url: 'https://google.com',
        feed: {link: 'https://google.co.uk'},
        items: [
          {
            title: 'titleexample',
            pubDate: '2018-02-02 10:10'
          },
          {
            title: 'anothertitle',
            pubDate: '2018-01-01 11:11'
          }
        ]
      }
    }
    expect(addItems(state, action)).toEqual([
      {
        ...action.feed.items[0],
        name: action.feed.name,
        url: action.feed.url,
        link: action.feed.feed.link
      },
      {
        ...action.feed.items[1],
        name: action.feed.name,
        url: action.feed.url,
        link: action.feed.feed.link
      }
    ])
  })
})
