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
      <div className={Styles[`button${this.props.size}`]}>
        <button className={Styles.button}>
          {this.props.text}
        </button>
      </div>
    )
  }
}

SubmitButton.defaultProps = {
  text: 'Submit',
  size: 'full'
}

SubmitButton.propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'full'])
}

export default SubmitButton
