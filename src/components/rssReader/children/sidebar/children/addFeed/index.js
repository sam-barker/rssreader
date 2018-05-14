import React, {Component} from 'react'
import {InputField, SubmitButton} from '../../../../../ui'
import PropTypes from 'prop-types'
import Styles from './styles.scss'
import {
  isValidUrl,
  isValidName,
  isSubmitEnabled
} from './helpers'

/**
 * AddFeed component
 */
class AddFeed extends Component {
  constructor (props) {
    super(props)
    this.state = {
      feedName: '',
      url: ''
    }

    this.bindHandlers()
  }

  bindHandlers () {
    this.onAddSubmit = this.onAddSubmit.bind(this)
    this.onFeedNameChange = this.onInputChange.bind(this, 'feedName')
    this.onUrlChange = this.onInputChange.bind(this, 'url')
  }

  /**
   * Handles changes in the input
   * @param {string} prop - The name of the property to change
   * @param {object} event - The event fired
   */
  onInputChange (prop, event) {
    this.setState({[prop]: event.target.value})
  }

  /**
   * Handles form submission
   */
  onAddSubmit () {
    if (!isValidUrl(this.state)) {
      return this.props.displayError(
        `"${this.state.url}" is not a valid url!`
      )
    }
    if (!isValidName(this.state)) {
      return this.props.displayError(
        `"${this.state.feedName}" is not a valid name! Please use alphabetic charcters only.`
      )
    }
    this.props.addFeed(this.state.feedName, this.state.url)
    this.setState({feedName: '', url: ''})
  }

  /**
   * Renders the component
   */
  render () {
    return (
      <div className={Styles.addFeed}>
        <h2 className={Styles.title}>Add a new feed</h2>
        <div className={Styles.inputContainer}>
          <InputField
            value={this.state.feedName}
            onChange={this.onFeedNameChange}
            placeholder={'Type your feed name ...'}
            maxLength={15} />
          <InputField
            value={this.state.url}
            onChange={this.onUrlChange}
            placeholder={'Copy your RSS url ...'} />
          <SubmitButton
            text={'Add feed'}
            onClick={this.onAddSubmit}
            disabled={!isSubmitEnabled(this.state)} />
        </div>
      </div>
    )
  }
}

AddFeed.propTypes = {
  addFeed: PropTypes.func.isRequired,
  displayError: PropTypes.func.isRequired
}

export default AddFeed
