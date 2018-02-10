import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import {
  Link
} from 'react-router-dom'

import './index.css'

function Artists(props) {
  const {name, id, images} = props.artist

  return (
    <Link to={`/albums/${id}`} className="Artist">
      <Paper className="Artist-card">
        <img width="64" src={images.length ? images[2].url : 'http://via.placeholder.com/150x150'} />

        <span>{name}</span>

        <div className="clear"></div>
      </Paper>
    </Link>
  )

}

export default Artists
