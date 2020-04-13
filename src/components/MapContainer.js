
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const mapStyles = {
  width: '100%',
  maxHeight: '300px',

};

export class MapContainer extends Component {
  render() {
    return (
      <div className="map-container">
      <Map
        google={this.props.google}
        zoom={11}
        style={mapStyles}
        initialCenter={{
         lat: 6.2518401,
         lng: -75.563591
        }}
        >
        <Marker
        name = {'Frisby'}
        position ={{ lat: 6.2114551, lng: -75.5665609}} />

        <Marker
        name = {'Mundo Verde'}
        position ={{ lat: 6.334997, lng: -75.558266}} />

        <Marker
        name = {'Mundo Verde'}
        position ={{ lat: 6.272654, lng: -75.439257}} />
        </Map>
      </div>    
    
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDGArUEBa5ns09IA7nt7jP-xfNIUkToFts'
})(MapContainer);





