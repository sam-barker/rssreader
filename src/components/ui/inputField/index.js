import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Styles from './styles.scss'

class InputField extends Component {
  constructor (props) {
    super(props)
    this.state = {focus: false}
    this.bindHandlers()
  }

  bindHandlers () {
    this.inputRef = this.inputRef.bind(this)
    this.onInputClick = this.onInputClick.bind(this)
    this.onInputBlur = this.onFocusChange.bind(this, false)
    this.onInputFocus = this.onFocusChange.bind(this, true)
  }

  get inputStyle () {
    return this.state.focus ? Styles.inputFocused : Styles.input
  }

  onInputClick () {
    this.input.focus()
  }

  onFocusChange (focus) {
    this.setState({focus})
  }

  inputRef (input) {
    this.input = input
  }

  renderInput () {
    return (
      <div
        onClick={this.onInputClick}
        className={this.inputStyle}>
        <input
          ref={this.inputRef}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          className={Styles.inputContent}
          type={this.props.type}
          placeholder={this.props.placeholder} />
      </div>
    )
  }

  render () {
    return (
      <div className={Styles.inputContainer}>
        {this.renderInput()}
      </div>
    )
  }
}

InputField.defaultProps = {
  type: 'text',
  placeholder: ''
}

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string
}

export default InputField
