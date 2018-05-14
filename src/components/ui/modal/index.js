import React from 'react'
import PropTypes from 'prop-types'
import Styles from './styles.scss'
import SubmitButton from '../submitButton'

/**
 * Modal component
 */
function Modal (props) {
  return (
    <div className={Styles.modal}>
      <div className={Styles.contentContainer}>
        <div className={Styles.content}>
          <p>{props.text}</p>
          <SubmitButton
            text={'OK'}
            onClick={props.onOkay} />
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  text: PropTypes.string.isRequired,
  onOkay: PropTypes.func.isRequired
}

export default Modal
