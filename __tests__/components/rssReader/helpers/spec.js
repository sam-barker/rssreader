/*
   global expect
   global it
   global describe
   global jest
 */

import {mapStateToProps, mapDispatchToProps} from '../../../../src/components/rssReader/helpers'

describe('RSSReader - Helpers', () => {
  describe('mapStateToProps', () => {
    it('returns normal feeds if there is no search term', () => {
      const state = {
        feeds: [{
          name: 'feed1',
          url: 'testurl',
          link: 'testlink',
          items: []
        }]
      }
  
      const {feeds} = mapStateToProps(state)
      expect(feeds).toEqual(state.feeds)
    })
  
    it('returns feeds whose name match a search term', () => {
      const state = {
        searchTerm: 'hello',
        feeds: [
          {
            name: 'feed1',
            url: 'testurl',
            link: 'testlink',
            items: []
          },
          {
            name: 'hello',
            url: 'testurl',
            link: 'testlink',
            items: []
          }
        ]
      }
  
      const {feeds} = mapStateToProps(state)
      expect(feeds).toEqual([state.feeds[1]])
    })
  
    it('sorts feeds by collapsing them into their items', () => {
      const state = {
        feeds: [
          {
            name: 'hello',
            url: 'testurl',
            feed: {
              link: 'testlink'
            },
            items: [
              {
                title: 'My item 1',
                pubDate: '2016-01-01 9:03'
              }
            ]
          },
          {
            name: 'feed1',
            url: 'testurl',
            feed: {
              link: 'testlink'
            },
            items: [
              {
                title: 'My item 2',
                pubDate: '2018-01-01 10:10'
              }
            ]
          }
        ]
      }
  
      const {sortedFeeds} = mapStateToProps(state)
      expect(sortedFeeds).toEqual([
        {
          ...state.feeds[1].items[0],
          name: state.feeds[1].name,
          url: state.feeds[1].url,
          link: state.feeds[1].feed.link
        },
        {
          ...state.feeds[0].items[0],
          name: state.feeds[0].name,
          url: state.feeds[0].url,
          link: state.feeds[0].feed.link
        }
      ])
    })
  })

  describe('mapDispatchToProps', () => {
    const dispatch = jest.fn()
    const props = mapDispatchToProps(dispatch)
    jest.useFakeTimers()

    it('correctly gets props', () => {
      expect(props.addFeed).toBeDefined()
      expect(props.removeFeed).toBeDefined()
      expect(props.searchFeeds).toBeDefined()
    })

    it('calls dispatch on each prop function', () => {
      props.addFeed('name', 'url')
      props.removeFeed('name', 'url')
      props.searchFeeds('name')
      jest.runAllTimers()
      expect(dispatch).toHaveBeenCalledTimes(3)
    })
  })
})
