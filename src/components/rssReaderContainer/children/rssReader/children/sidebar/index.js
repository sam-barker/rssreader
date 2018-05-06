import React, {Component} from 'react'
import Styles from './styles'

class Sidebar extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <aside style={Styles.sidebar}>
        <h1 style={Styles.header}>Content Generator</h1>
        <input type={'search'} placeholder={'Filter your feeds ...'} />
      </aside>
    )
  }
}

export default Sidebar
