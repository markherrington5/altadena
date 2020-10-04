import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


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
      <div style={{ height: '22em', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GMAPS_API,
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