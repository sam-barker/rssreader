import React, {Component} from 'react'
import {Search} from './children'
import Styles from './styles.scss'

class Sidebar extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <aside className={Styles.sidebar}>
        <h1 className={Styles.header}>Content Generator</h1>
        <Search />
      </aside>
    )
  }
}

export default Sidebar