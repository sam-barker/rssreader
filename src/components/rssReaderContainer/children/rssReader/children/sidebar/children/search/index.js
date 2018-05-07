import React, {Component} from 'react'
import {SearchIcon} from '../../../../../../../icons'
import Styles from './styles.scss'

class Sidebar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      focus: false
    }
    this.inputRef = this.inputRef.bind(this)
    this.onSearchClick = this.onSearchClick.bind(this)
    this.onInputBlur = this.onFocusChange.bind(this, false)
    this.onInputFocus = this.onFocusChange.bind(this, true)
  }

  get searchStyle () {
    return this.state.focus ? Styles.searchFocused : Styles.search
  }

  onSearchClick () {
    this.input.focus()
  }

  onFocusChange (focus) {
    this.setState({focus})
  }

  inputRef (input) {
    this.input = input
  }

  renderSearchBar () {
    return (
      <div
        onClick={this.onSearchClick}
        className={this.searchStyle}>
        <input
          ref={this.inputRef}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          className={Styles.searchContent}
          type={'search'}
          placeholder={'Filter your feeds ...'} />
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
        {this.renderSearchBar()}
        {this.renderSearchIcon()}
      </div>
    )
  }
}

export default Sidebar
