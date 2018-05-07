import React, {Component} from 'react'
import {InputField, SubmitButton} from '../../../../../../../ui'
import PropTypes from 'prop-types'
import Styles from './styles.scss'

const URL_PATTERN = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
const NAME_PATTERN = /^[a-z ,.'-]+$/i
const URL_REGEX = new RegExp(URL_PATTERN)
const NAME_REGEX = new RegExp(NAME_PATTERN)

class AddFeed extends Component {
  constructor (props) {
    super(props)
    this.state = {
      feedName: '',
      url: ''
    }

    this.onAddSubmit = this.onAddSubmit.bind(this)
  }

  onInputChange (prop, event) {
    this.setState({[prop]: event.target.value})
  }

  onAddSubmit () {
    if (this.state.url && !this.state.url.match(URL_REGEX)) {
      return window.alert('Invalid URL!')
    }

    if (this.state.feedName && !this.state.feedName.match(NAME_REGEX)) {
      return window.alert('Invalid name!')
    }

    this.props.addFeed(this.state.feedName, this.state.url)
  }

  render () {
    const isSubmitDisabled = !this.state.feedName || !this.state.url
    return (
      <div className={Styles.addFeedContainer}>
        <h2 className={Styles.titleText}>Add a new feed</h2>
        <div className={Styles.addFeedInputContainer}>
          <InputField
            value={this.state.feedName}
            onChange={this.onInputChange.bind(this, 'feedName')}
            placeholder={'Type your feed name ...'} />
          <InputField
            value={this.state.url}
            onChange={this.onInputChange.bind(this, 'url')}
            placeholder={'Copy your RSS url ...'} />
          <SubmitButton
            text={'Add feed'}
            onClick={this.onAddSubmit}
            disabled={isSubmitDisabled} />
        </div>
      </div>
    )
  }
}

AddFeed.propTypes = {
  addFeed: PropTypes.func.isRequired
}

export default AddFeed
