import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {debounce} from 'throttle-debounce';

import CircularProgress from 'material-ui/CircularProgress'

import Artist from './Artist'

class ArtistsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      query: props.query
    }

    this.getArtists = debounce(500, this.getArtists)
  }

  propTypes = {
    query: PropTypes.string.isRequired,
  }

  componentDidMount() {
    this.getArtists()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.query !== this.state.query) {
      this.setState({ query: nextProps.query }, () => {
        this.getArtists()
      })

    }
  }

  getArtists() {
    const {query} = this.props

    if (query === '') {
      this.setState((prevState, props) => {
        return {artists: []}
      })

      return
    }

    this.setState({loading: true})

    fetch(`${process.env.REACT_APP_API_URL}/spotify/artists?query=${query}`, {
    	method: 'get'
    }).then(res => res.json()).then(data => {
      this.setState({
        artists: data.artists.items,
        loading: false
      })

    }).catch(err => {
      this.setState({loading: false})
    	// sad :(
    })
  }



  render() {
    const {artists, loading} = this.state

    if (loading) {
      return <CircularProgress />
    }

    if (artists) {
      return (
        <article className="Artists">

          { !artists.length
            ? <p>Artists not found.</p>
            : <section>

                { artists.map(artist => (
                  <Artist key={artist.id} artist={artist} />
                )) }

              </section>
          }
      </article>)
    }

    return null
  }
}

export default ArtistsList
