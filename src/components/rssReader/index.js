import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Sidebar, Posts} from './children'
import {Modal} from '../ui'
import Styles from './styles.scss'
import {
  mapStateToProps,
  mapDispatchToProps
} from './helpers'

/**
 * RSSREader component class
 */
export class RSSReader extends Component {
  static defaultProps = {
    feeds: [],
    items: []
  }

  static propTypes = {
    feeds: PropTypes.arrayOf(PropTypes.object),
    items: PropTypes.arrayOf(PropTypes.object),
    addFeed: PropTypes.func.isRequired,
    removeFeed: PropTypes.func.isRequired,
    searchFeeds: PropTypes.func.isRequired
  }

  /**
   * Renders a modal containing an error if available
   */
  renderError () {
    return !this.props.error ? null : (
      <Modal
        text={this.props.error}
        onOkay={this.props.dismissError} />
    )
  }

  /**
   * Renders the component
   */
  render () {
    return (
      <div className={Styles.rssReaderContainer}>
        <Sidebar
          feeds={this.props.feeds}
          addFeed={this.props.addFeed}
          removeFeed={this.props.removeFeed}
          searchFeeds={this.props.searchFeeds}
          displayError={this.props.displayError} />
        <Posts items={this.props.items} />
        {this.renderError()}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RSSReader)