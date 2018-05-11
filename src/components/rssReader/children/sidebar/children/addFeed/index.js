import React, {Component} from 'react'
import {InputField, SubmitButton} from '../../../../../ui'
import PropTypes from 'prop-types'
import Styles from './styles.scss'
import {
  isValidUrl,
  isValidName,
  isSubmitEnabled,
  displayAlert
} from './helpers'

class AddFeed extends Component {
  constructor (props) {
    super(props)
    this.state = {
      feedName: '',
      url: ''
    }

    this.onAddSubmit = this.onAddSubmit.bind(this)
    this.onFeedNameChange = this.onInputChange.bind(this, 'feedName')
    this.onUrlChange = this.onInputChange.bind(this, 'url')
  }

  onInputChange (prop, event) {
    this.setState({[prop]: event.target.value})
  }

  onAddSubmit () {
    if (!isValidUrl(this.state)) return displayAlert('Invalid URL!')
    if (!isValidName(this.state)) return displayAlert('Invalid name!')
    this.props.addFeed(this.state.feedName, this.state.url)
    this.setState({feedName: '', url: ''})
  }

  render () {
    return (
      <div className={Styles.addFeedContainer}>
        <h2 className={Styles.titleText}>Add a new feed</h2>
        <div className={Styles.addFeedInputContainer}>
          <InputField
            value={this.state.feedName}
            onChange={this.onFeedNameChange}
            placeholder={'Type your feed name ...'} />
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
  addFeed: PropTypes.func.isRequired
}

export default AddFeed
