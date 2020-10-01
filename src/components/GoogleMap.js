import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 33.409831,
      lng: -86.763793
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '22em', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyBGYr7DPVtqsuuoyqzRuB72bRUI0BbJ2Sg',
            language: 'en',
            region: 'us'
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={33.409831}
            lng={-86.763793}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;