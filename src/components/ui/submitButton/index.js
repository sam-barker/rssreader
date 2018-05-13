import React from 'react'
import PropTypes from 'prop-types'
import Styles from './styles.scss'

function SubmitButton (props) {
  return (
    <div
      className={Styles[`button${props.size}`]}
      onClick={props.onClick}>
      <button className={Styles.button} disabled={props.disabled}>
        {props.text}
      </button>
    </div>
  )
}

SubmitButton.defaultProps = {
  text: 'Submit',
  size: 'full',
  disabled: false
}

SubmitButton.propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'full']),
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

export default SubmitButton
