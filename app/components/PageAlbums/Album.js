import React, { Component } from 'react'
import Paper from 'material-ui/Paper'

import PropTypes from 'prop-types'

import Tracks from '../Tracks'

import './index.css'

class Album extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      showTracks: false
    }
  }

  static propTypes = {
    album: PropTypes.object.isRequired,
  }

  showTracks(e) {
    this.setState((prevState, props) => {
      return {showTracks: !prevState.showTracks}
    })
  }

  render() {
    const {name, genre, id, images, album_type} = this.props.album
    const {loading, showTracks} = this.state

    return (
      <Paper className='Album'>
        <div onClick={this.showTracks.bind(this)}>
          <div>
            <img width="100%" src={images.length ? images[1].url : ''} />
          </div>
          <div className="Album-name">
            {name}
          </div>
        </div>

        {showTracks ? <Tracks album_id={id} /> : null}
      </Paper>
    )
  }
}

export default Album
