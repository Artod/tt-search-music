import React, { Component } from 'react'

import CircularProgress from 'material-ui/CircularProgress'

import Track from './Track'

import PropTypes from 'prop-types'

import './index.css'

class Tracks extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      tracks: null
    }
  }

  static propTypes = {
    album_id: PropTypes.string.isRequired,
  }

  componentDidMount() {
    this.setState({loading: true})

    fetch(`${process.env.REACT_APP_API_URL}/spotify/tracks/${this.props.album_id}`, {
    	method: 'get'
    }).then(res => res.json()).then(data => {
      this.setState({
        tracks: data.items,
        loading: false
      })

    }).catch(err => {
      this.setState({loading: false})
    	// sad :(
    })
  }

  render() {
    const {tracks, loading} = this.state

    return (
      <section className="Tracks">
        {
          (loading
            ? <CircularProgress />
            : (tracks
              ? <ol>
                  {tracks.map(track => (
                    <Track key={track.id} track={track} />
                  ))}
                </ol>
              : null
            )
          )
        }
      </section>
    )
  }
}

export default Tracks
