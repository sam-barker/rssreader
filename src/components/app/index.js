import React, {Component} from 'react'
import Store from '../../data'
import RSSReaderContainer from '../rssReaderContainer'
// import {fetchUsers} from '../../data/actionCreators/users'
// import UserList from '../userListContainer'

import WebFont from 'webfontloader'

/**
 * Application class
 */
class App extends Component {
  constructor (props) {
    super(props)
    WebFont.load({
      google: {
        families: ['Lato:300,400,700', 'sans-serif']
      }
    })
  }

  componentWillMount () {
    this.unsubscribe = Store.subscribe(() => { })
    // Store.dispatch(fetchUsers())
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
