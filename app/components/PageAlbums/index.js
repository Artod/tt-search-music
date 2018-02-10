import React, { Component } from 'react'

import CircularProgress from 'material-ui/CircularProgress'

import Album from './Album'

import './index.css'

class PageAlbums extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      loading: false
    }
  }

  componentDidMount() {
    this.setState({loading: true})

    fetch(`${process.env.REACT_APP_API_URL}/spotify/albums/${this.state.id}`, {
    	method: 'get'
    }).then(res => res.json()).then(data => {
      this.setState({
        albums: data.items,
        loading: false
      })

    }).catch(err => {
      this.setState({loading: false})
    	// sad :(
    })
  }

  render() {
    const {albums, loading} = this.state

    if (albums) {
      return (
        <article className="PageAlbums">
          <h1>{albums[0].artists[0].name}</h1>
          { !albums.length
            ? <p>Albums not found.</p>
            : <section className="PageAlbums-flexContainer">

                { albums.map(album => (
                  <Album key={album.id} album={album} />
                )) }

              </section>
          }
      </article>)
    }

    if (loading) {
      return <CircularProgress />
    }

    return <p>Something went wrong. Try to reload page.</p>
  }
}

export default PageAlbums
