import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import Store from './data'
import RSSReader from './components/rssReader'

class App extends React.Component {
  componentWillMount () {
    this.unsubscribe = Store.subscribe(() => { })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

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
