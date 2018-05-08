import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {SearchIcon} from '../../../../../../../icons'
import {InputField} from '../../../../../../../ui'
import Styles from './styles.scss'

class Sidebar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchValue: ''
    }

    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSearchChange (evt) {
    const newValue = evt.target.value
    this.setState({searchValue: newValue})
    this.props.searchFeeds(newValue)
  }

  renderSearchInput () {
    return (
      <div className={Styles.searchInputField}>
        <InputField
          type={'search'}
          placeholder={'Filter your feeds ...'}
          value={this.state.searchValue}
          onChange={this.onSearchChange} />
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

Sidebar.propTypes = {
  searchFeeds: PropTypes.func.isRequired
}

export default Sidebar
