import React, {Component} from 'react'
import {InputField, SubmitButton} from '../../../../../../../ui'
// import PropTypes from 'prop-types'
import Styles from './styles.scss'

class AddFeed extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  renderInputField (placeholder) {
    return (
      <div className={Styles.addFeedInput}>
        <InputField placeholder={placeholder} />
      </div>
    )
  }

  render () {
    return (
      <div className={Styles.addFeedContainer}>
        <h2 className={Styles.titleText}>Add a new feed</h2>
        <div className={Styles.addFeedInputContainer}>
          <InputField placeholder={'Type your feed name ...'} />
          <InputField placeholder={'Copy your RSS url ...'} />
          <SubmitButton text={'Add feed'} />
        </div>
      </div>
    )
  }
}

export default AddFeed
