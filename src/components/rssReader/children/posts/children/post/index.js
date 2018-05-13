import React from 'react'
import PropTypes from 'prop-types'
import Styles from './styles.scss'
import {LinkIcon} from '../../../../../icons'
import {getDateString} from './helpers'

function renderThumbnail ({thumbnail}) {
  return !thumbnail ? null : (
    <div className={Styles.thumbnailContainer}>
      <img src={thumbnail} className={Styles.thumbnail} />
    </div>
  )
}

function renderDetails ({title, description}) {
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

function renderName ({link, name, pubDate}) {
  return (
    <div className={Styles.nameContainer}>
      <div className={Styles.name}>
        <LinkIcon className={Styles.linkIcon} />
        <a className={Styles.nameLink} href={link}>{name}</a>
      </div>
      <div className={Styles.date}>
        <p>
          {getDateString(pubDate)}
        </p>
      </div>
    </div>
  )
}

function onPostClick ({guid}) {
  window.open(guid, '_blank')
}

function Post (props) {
  return (
    <div
      key={props.title}
      className={Styles.post}
      onClick={onPostClick.bind(this, props)}>
      {renderName(props)}
      {renderThumbnail(props)}
      {renderDetails(props)}
    </div>
  )
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pubDate: PropTypes.string.isRequired,
  guid: PropTypes.string.isRequired
}

export default Post
