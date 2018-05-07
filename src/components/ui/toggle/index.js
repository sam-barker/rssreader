import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Styles from './styles.scss'

class Toggle extends Component {
  constructor (props) {
    super(props)
    // this.state = {
    //   toggled: this.props.toggled
    // }
    this.clickCheckbox = this.clickCheckbox.bind(this)
    this.checkboxRef = this.checkboxRef.bind(this)
    // this.onCheckboxClick = this.onCheckboxClick.bind(this)
  }

  get labelStyle () {
    return this.props.toggled ? Styles.labelChecked : Styles.label
  }

  get circleStyle () {
    return this.props.toggled ? Styles.circleChecked : Styles.circle
  }

  // onCheckboxClick () {
  //   this.setState({toggled: !this.state.toggled})
  // }

  clickCheckbox () {
    this.checkbox.click()
  }

  checkboxRef (checkbox) {
    this.checkbox = checkbox
  }

  render () {
    return (
      <div onClick={this.clickCheckbox} className={Styles.container}>
        <div className={this.circleStyle}>
          <input
            ref={this.checkboxRef}
            onClick={this.props.onToggle}
            className={Styles.input}
            type={'checkbox'}
            checked={this.props.toggled} />
        </div>
      </div>
    )
  }
}

Toggle.defaultProps = {
  toggled: false
}

Toggle.propTypes = {
  toggled: PropTypes.bool,
  onToggle: PropTypes.func.isRequired
}

export default Toggle
