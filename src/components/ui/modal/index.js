import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Styles from './styles.scss'
import SubmitButton from '../submitButton'

export class Modal extends Component {
  render () {
    return (
      <div className={Styles.modal}>
        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <p>{this.props.text}</p>
            <SubmitButton
              text={'OK'}
              onClick={this.props.onOkay} />
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  text: PropTypes.string.isRequired,
  onOkay: PropTypes.func.isRequired
}

export default Modal
