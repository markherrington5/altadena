import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Pin from '../pin.png';

const Marker = ({ text }) => <img src={Pin} alt='maps-pin' height={36}  />;


class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 33.4097573,
      lng: -86.7637763
    },
    zoom: 17
  };

  render() {

    return (
      <div style={{ height: '26em', width: '100%' }}>
        <GoogleMapReact
          yesIWantToUseGoogleMapApiInternals
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GMAPS_API,
            language: 'en',
            region: 'us'
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          layerTypes={['TrafficLayer', 'TransitLayer']}
        >
          <Marker
            lat={33.409831}
            lng={-86.763793}
            text='hello'
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;