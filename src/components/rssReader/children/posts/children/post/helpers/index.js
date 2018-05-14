import {MONTH_NAMES} from '../constants'

/**
 * Adds a zero to the start of a number
 * @param {number} num - the number to padd with a zero
 */
function addZero (num) {
  if (num < 10) {
    num = '0' + num
  }
  return num
}

/**
 * Converts the date string into a more readable format
 * @param {string} date - The data to convert
 */
export function getDateString (date) {
  const newDate = new Date(date)
  const day = newDate.getDate()
  const month = MONTH_NAMES[newDate.getMonth()]
  const year = newDate.getFullYear()
  const hours = addZero(newDate.getHours())
  const mins = addZero(newDate.getMinutes())

  return `${month} ${day} ${year} | ${hours}:${mins}`
}

/**
 * Goes to a specific guid
 * @param {object} param0 - object which contains the guid to navigate to
 */
export function goTo ({guid}) {
  window.open(guid, '_blank')
}
