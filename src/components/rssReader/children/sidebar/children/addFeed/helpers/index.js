import {URL_REGEX, NAME_REGEX} from '../constants'

/**
 * Determines whether the url entered is valid
 * @param {object} state - the component state
 */
export function isValidUrl (state) {
  return !!state.url && state.url.match(URL_REGEX)
}

/**
 * Determines whether the name entered is valid
 * @param {object} state - the component state
 */
export function isValidName (state) {
  return !!state.feedName && state.feedName.match(NAME_REGEX)
}

/**
 * Determines whether or not the submit button is enabled
 * @param {object} state - the component state
 */
export function isSubmitEnabled (state) {
  return !!state.feedName && !!state.url
}
