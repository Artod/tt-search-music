import React, { Component } from 'react'
import SearchForm from './SearchForm'
import ArtistsList from './ArtistsList'

class PageArtists extends Component {
  constructor(props) {
    super()

    this.state = {
      query: ''
    }
  }

  onSearch(query) {
    this.setState({query: query})
  }

  render() {
    return (
      <section>
        <SearchForm onChange={this.onSearch.bind(this)}></SearchForm>
        {this.state.query !== ''
          ? <ArtistsList query={this.state.query}></ArtistsList>
          : null
        }

      </section>
    )
  }
}

export default PageArtists
