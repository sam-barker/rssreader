import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Styles from './styles.scss'

/**
 * InputField component
 */
class InputField extends Component {
  /**
   * Creates an InputField
   * @param {object} props - Component props
   */
  constructor (props) {
    super(props)
    this.state = {focus: false}
    this.bindHandlers()
  }

  /**
   * Binds all of the handlers to this
   */
  bindHandlers () {
    this.inputRef = this.inputRef.bind(this)
    this.onInputClick = this.onInputClick.bind(this)
    this.onInputBlur = this.onFocusChange.bind(this, false)
    this.onInputFocus = this.onFocusChange.bind(this, true)
  }

  /**
   * Retrieves the style for the input based on focus
   */
  get inputStyle () {
    return this.state.focus ? Styles.containerFocused : Styles.container
  }

  /**
   * Handles input click
   */
  onInputClick () {
    this.input.focus()
  }

  /**
   * Handles focus
   * @param {boolean} focus - the new value of focus
   */
  onFocusChange (focus) {
    this.setState({focus})
  }

  /**
   * Internal reference to the input
   * @param {node} input - The input rendered
   */
  inputRef (input) {
    this.input = input
  }

  /**
   * Renders the input field
   */
  renderInput () {
    return (
      <div
        onClick={this.onInputClick}
        className={this.inputStyle}>
        <input
          ref={this.inputRef}
          value={this.props.value}
          onChange={this.props.onChange}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          className={Styles.input}
          type={this.props.type}
          maxLength={this.props.maxLength}
          placeholder={this.props.placeholder} />
      </div>
    )
  }

  /**
   * Renders the component
   */
  render () {
    return (
      <div className={Styles.component}>
        {this.renderInput()}
      </div>
    )
  }
}

InputField.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
  maxLength: 200
}

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number
}

export default InputField
