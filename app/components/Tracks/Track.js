import React, { Component } from 'react'

function millisToMinutesAndSeconds(millis) {
  const minutes = Math.floor(millis / 60000)
  const seconds = ((millis % 60000) / 1000).toFixed(0)
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
}

function Track(props) {
  const {name, duration_ms, external_urls: {spotify: url}} = props.track

  return (
    <li>
      <a href={url} target="_blank">
        {name} 
      </a>
      ({millisToMinutesAndSeconds(duration_ms)})
    </li>
  )

}

export default Track
