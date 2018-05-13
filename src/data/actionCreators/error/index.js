import ActionTypes from '../../actionTypes'

export function dismissError () {
  return {
    type: ActionTypes.DISMISS_ERROR
  }
}

export function displayError (text) {
  return {
    type: ActionTypes.DISPLAY_ERROR,
    text
  }
}
