import React from 'react'
import PropTypes from 'prop-types'

function RemoveIcon (props) {
  return (
    <svg
      width={`${props.width}px`}
      height={`${props.height}px`}
      style={props.style}
      xmlns={'http://www.w3.org/2000/svg'}
      viewBox={'0 0 50 50'}>
      <circle
        cx={'25'}
        cy={'25'}
        r={'25'}
        fill={props.colour} />
      <path
        fill={'none'}
        stroke={'#fff'}
        strokeWidth={'2'}
        strokeLinecap={'round'}
        strokeMiterlimit={'10'}
        d={'M16 34l9-9 9-9M16 16l9 9 9 9'} />
    </svg>
  )
}

RemoveIcon.defaultProps = {
  width: 20,
  height: 20,
  className: '',
  colour: '#DEAB95'
}

RemoveIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  colour: PropTypes.string
}

export default RemoveIcon
