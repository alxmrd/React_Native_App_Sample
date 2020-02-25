import * as React from "react";
import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";
import { connect } from "react-redux";

class MapScreen extends React.Component {
  render() {
    const INITIAL_REGION = {
      latitude: 37.98381,
      longitude: 23.727539,
      latitudeDelta: 8.5,
      longitudeDelta: 8.5
    };
    return (
      <MapView initialRegion={INITIAL_REGION} style={{ flex: 1 }}>
        {this.props.pois.map((item, i) => (
          <Marker
            key={i}
            coordinate={{
              latitude: parseFloat(item.latitude),
              longitude: parseFloat(item.longitude)
            }}
            title={item.address}
          />
        ))}
      </MapView>
    );
  }
}

const mapStateToProps = state => ({
  pois: state.pois
});

export default connect(mapStateToProps, null)(MapScreen);
