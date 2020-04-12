
import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


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
        zoom={4}
        style={mapStyles}
        initialCenter={{
         lat: 6.2518401,
         lng: -75.563591
        }}
        />
      </div>
      
    
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDGArUEBa5ns09IA7nt7jP-xfNIUkToFts'
})(MapContainer);





