import React, {Component} from 'react'
import Store from '../../data'
import RSSReaderContainer from '../rssReaderContainer'
// import {fetchUsers} from '../../data/actionCreators/users'
// import UserList from '../userListContainer'

// import WebFont from 'webfontloader'
// import Styles from './styles.scss'

/**
 * Application class
 */
class App extends Component {
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
