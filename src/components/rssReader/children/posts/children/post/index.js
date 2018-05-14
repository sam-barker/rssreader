import React from 'react'
import PropTypes from 'prop-types'
import Styles from './styles.scss'
import {LinkIcon} from '../../../../../icons'
import {goTo, getDateString} from './helpers'

/**
 * Renders the thumbnail
 * @param {object} param0 - object containing the thumbnail
 */
function renderThumbnail ({thumbnail}) {
  if (!thumbnail) return null
  return (
    <div className={Styles.thumbnailContainer}>
      <img src={thumbnail} className={Styles.thumbnail} />
    </div>
  )
}

/**
 * Renders the post details
 * @param {object} param0 - object containing title and description
 */
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

/**
 * Renders the post name
 * @param {object} param0 - object containing the link, name and publish date of the post
 */
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

/**
 * Post component
 * @param {object} props - component props
 */
function Post (props) {
  return (
    <div
      key={props.title}
      className={Styles.post}
      onClick={goTo.bind(this, props)}>
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
