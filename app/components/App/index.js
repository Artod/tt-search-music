import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar  from 'material-ui/AppBar'

import './index.css'

import PageArtists from '../PageArtists'
import PageAlbums from '../PageAlbums'
import PageTracks from '../PageTracks'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <section className="App">

          <AppBar title="ToushTunes Search Music"></AppBar>

          <Router>
            <section>
              <Route exact path="/" component={PageArtists} />
              <Route path="/artist/:id" component={PageAlbums} />
              <Route path="/albums/:id" component={PageTracks} />
            </section>
          </Router>

        </section>
      </MuiThemeProvider>
    )
  }
}

export default App
