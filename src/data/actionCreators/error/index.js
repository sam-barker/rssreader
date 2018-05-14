import ActionTypes from '../../actionTypes'

/**
 * Dismissed an error by emitting a DISMISS_ERROR action
 */
export function dismissError () {
  return {
    type: ActionTypes.DISMISS_ERROR
  }
}

/**
 * Displays an error by firing a DISPLAY_ERROR action
 * @param {string} text - The error text to display
 */
export function displayError (text) {
  return {
    type: ActionTypes.DISPLAY_ERROR,
    text
  }
}
