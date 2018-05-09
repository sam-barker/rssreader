import React from 'react'
import PropTypes from 'prop-types'
import Styles from './styles.scss'

const MONTH_NAMES = [
  'January', 'February', 'March',
  'April', 'May', 'June', 'July',
  'August', 'September', 'October',
  'November', 'December'
]

function getDateString (date) {
  const newDate = new Date(date)
  const day = newDate.getDate()
  const month = MONTH_NAMES[newDate.getMonth()]
  const year = newDate.getFullYear()
  const hours = newDate.getHours()
  const mins = newDate.getMinutes()

  return `${month} ${day} ${year} | ${hours}:${mins}`
}

function renderThumbnail (thumbnail) {
  return !thumbnail ? null : (
    <div className={Styles.thumbnailContainer}>
      <img src={thumbnail} className={Styles.thumbnail} />
    </div>
  )
}

function renderDetails (title, description) {
  return (
    <div className={Styles.details}>
      <p className={Styles.title}>
        {title}
      </p>
      <p className={Styles.description}>
        {description}
      </p>
    </div>
  )
}

function Post (post) {
  const {
    name,
    title,
    thumbnail,
    description,
    link,
    pubDate
  } = post
  return (
    <div key={title} className={Styles.post}>
      <p className={Styles.name}>
        <a className={Styles.nameLink} href={link}>{name}</a>
        <p className={Styles.date}>
          {getDateString(pubDate)}
        </p>
      </p>
      {renderThumbnail(thumbnail)}
      {renderDetails(title, description)}
    </div>
  )
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default Post
