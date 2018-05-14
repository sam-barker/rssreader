import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {RemoveIcon, BulletIcon} from '../../../../../../../icons'
import Styles from './styles.scss'
import {
  REMOVE_ICON_COLOUR,
  REMOVE_ICON_HOVER_COLOUR
} from './constants'

/**
 * Feed component
 */
class Feed extends Component {
  constructor (props) {
    super(props)
    this.state = {
      removeHover: false
    }

    this.bindHandlers()
  }

  /**
   * Binds methods to this
   */
  bindHandlers () {
    this.onRemove = this.onRemove.bind(this)
    this.onMouseEnterRemove = this.setStateValue.bind(this, 'removeHover', true)
    this.onMouseLeaveRemove = this.setStateValue.bind(this, 'removeHover', false)
  }

  /**
   * Sets a state value
   * @param {string} key - The name of the state object to set
   * @param {object} val - The new value
   */
  setStateValue (key, val) {
    this.setState({[key]: val})
  }

  /**
   * Removes an event
   * @param {object} e - the event fired
   */
  onRemove (e) {
    e.stopPropagation()
    this.props.removeFeed(this.props.name, this.props.url)
  }

  /**
   * Renders the remove icon
   */
  renderRemoveIcon () {
    const colour = this.state.removeHover ? REMOVE_ICON_HOVER_COLOUR : REMOVE_ICON_COLOUR
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

  /**
   * Renders the component
   */
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
