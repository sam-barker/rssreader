import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Styles from './styles.scss'

class SubmitButton extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div
        className={Styles[`button${this.props.size}`]}
        onClick={this.props.onClick}>
        <button className={Styles.button} disabled={this.props.disabled}>
          {this.props.text}
        </button>
      </div>
    )
  }
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
