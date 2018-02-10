import React, { Component } from 'react'
import {Card, CardTitle, CardText} from 'material-ui/Card'

function Artists(props) {
  const {name, id, images} = props.artist

  return (
    <Card className=''>

      <img src={images.length ? images[2].url : ''} />

      <CardText>{name}</CardText>
    </Card>
  )

}

export default Artists
