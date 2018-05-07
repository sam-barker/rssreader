import React, {Component} from 'react'
import {Search, FeedList, AddFeed} from './children'
import Styles from './styles.scss'

class Sidebar extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <aside className={Styles.sidebar}>
        <div className={Styles.sidebarContent}>
          <h1 className={Styles.header}>Content Generator</h1>
          <Search />
          <FeedList />
          <AddFeed />
        </div>
      </aside>
    )
  }
}

export default Sidebar
