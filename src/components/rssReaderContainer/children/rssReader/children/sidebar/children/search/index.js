import React, {Component} from 'react'
import {SearchIcon} from '../../../../../../../icons'
import {InputField} from '../../../../../../../ui'
import Styles from './styles.scss'

class Sidebar extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  renderSearchInput () {
    return (
      <div className={Styles.searchInputField}>
        <InputField type={'search'} placeholder={'Filter your feeds ...'} />
      </div>
    )
  }

  renderSearchIcon () {
    return (
      <div className={Styles.searchIconContainer}>
        <SearchIcon />
      </div>
    )
  }

  render () {
    return (
      <div className={Styles.searchContainer}>
        {this.renderSearchInput()}
        {this.renderSearchIcon()}
      </div>
    )
  }
}

export default Sidebar
