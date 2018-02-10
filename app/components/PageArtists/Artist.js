import React, { Component } from 'react'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import {
  Link
} from 'react-router-dom'

function Artists(props) {
  const {name, id, images} = props.artist

  return (
    <Link to={`/albums/${id}`}>
      <Card className=''>

        <img src={images.length ? images[2].url : ''} />

        <CardText>{name}</CardText>
      </Card>
    </Link>
  )

}

export default Artists
