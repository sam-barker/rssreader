import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import Store from './data'
import RSSReader from './components/rssReader'

/**
 * Main App component
 */
class App extends React.Component {
  /**
   * triggered on component mounting
   */
  componentWillMount () {
    this.unsubscribe = Store.subscribe(() => { })
  }

  /**
   * triggered on umounting
   */
  componentWillUnmount () {
    this.unsubscribe()
  }

  /**
   * Renders the component
   */
  render () {
    return (
      <RSSReader />
    )
  }
}

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
