import React, {Component} from 'react'
import Store from '../../data'
import RSSReaderContainer from '../rssReaderContainer'
import {addFeed} from '../../data/actionCreators'

/**
 * Application class
 */
class App extends Component {
  componentWillMount () {
    this.unsubscribe = Store.subscribe(() => { })
    Store.getState().feeds.forEach((feed) => {
      Store.dispatch(addFeed(feed.name, feed.url))
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    return (
      <RSSReaderContainer />
    )
  }
}

export default App
