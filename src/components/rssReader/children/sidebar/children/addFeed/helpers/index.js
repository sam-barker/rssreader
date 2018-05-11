import {URL_REGEX, NAME_REGEX} from '../constants'

export const displayAlert = window.alert

export function isValidUrl (state) {
  return !!state.url && state.url.match(URL_REGEX)
}

export function isValidName (state) {
  return !!state.feedName && state.feedName.match(NAME_REGEX)
}

export function isSubmitEnabled (state) {
  return !!state.feedName && !!state.url
}
