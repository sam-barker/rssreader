const URL_PATTERN = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
const NAME_PATTERN = /^[a-z ,.'-]+$/i
export const URL_REGEX = new RegExp(URL_PATTERN)
export const NAME_REGEX = new RegExp(NAME_PATTERN)
