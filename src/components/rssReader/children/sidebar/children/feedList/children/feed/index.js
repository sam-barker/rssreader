import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {RemoveIcon, BulletIcon} from '../../../../../../../icons'
import Styles from './styles.scss'

class Feed extends Component {
  constructor (props) {
    super(props)
    this.state = {
      removeHover: false
    }

    this.bindHandlers()
  }

  bindHandlers () {
    this.onRemove = this.onRemove.bind(this)
    this.onMouseEnterRemove = this.setStateValue.bind(this, 'removeHover', true)
    this.onMouseLeaveRemove = this.setStateValue.bind(this, 'removeHover', false)
  }

  setStateValue (key, val) {
    this.setState({[key]: val})
  }

  onRemove (e) {
    e.stopPropagation()
    this.props.removeFeed(this.props.name, this.props.url)
  }

  renderRemoveIcon () {
    const colour = this.state.removeHover ? '#d65c5c' : '#DEAB95'
    return (
      <div
        onClick={this.onRemove}
        onMouseEnter={this.onMouseEnterRemove}
        onMouseLeave={this.onMouseLeaveRemove}
        className={Styles.removeIconContainer}>
        <RemoveIcon colour={colour} />
      </div>
    )
  }

  render () {
    const {name} = this.props
    return (
      <li
        className={Styles.feed}>
        <BulletIcon />
        <p className={Styles.feedName}>{name}</p>
        {this.renderRemoveIcon()}
      </li>
    )
  }
}

Feed.defaultProps = {
  name: '',
  url: ''
}

Feed.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  removeFeed: PropTypes.func.isRequired
}

export default Feed
