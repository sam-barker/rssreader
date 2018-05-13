import {MONTH_NAMES} from '../constants'

function addZero (i) {
  if (i < 10) {
    i = '0' + i
  }
  return i
}

export function getDateString (date) {
  const newDate = new Date(date)
  const day = newDate.getDate()
  const month = MONTH_NAMES[newDate.getMonth()]
  const year = newDate.getFullYear()
  const hours = addZero(newDate.getHours())
  const mins = addZero(newDate.getMinutes())

  return `${month} ${day} ${year} | ${hours}:${mins}`
}