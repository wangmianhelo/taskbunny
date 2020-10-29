

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './Near.css'
import React, { Component ,createRef } from 'react'
import L from 'leaflet';

const myicon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25,41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41]
})


export default class Near extends Component {
  state = {
    hasLocation: false,
    latlng: {
      lat: 51.505,
      lng: -0.09,
    },
  }

  mapRef = createRef()

  handleClick = () => {
    const map = this.mapRef.current
    if (map != null) {
      map.leafletElement.locate()
    }
  }

  handleLocationFound = (e) => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
    })
  }

  render() {
    const marker = this.state.hasLocation ? (
      <Marker position={this.state.latlng} icon ={myicon}>
        <Popup>You are here</Popup>
      </Marker>
    ) : null

    return (
      <Map className ='map'
        center={this.state.latlng}
        length={4}
        onClick={this.handleClick}
        onLocationfound={this.handleLocationFound}
        ref={this.mapRef}
        zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {marker}
      </Map>
    )
  }
}





