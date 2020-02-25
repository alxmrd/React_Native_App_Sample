import { connect } from "react-redux";
import ListScreen from "./ListScreen";
import geolib from "geolib";

export function sortPoisByAddress(pois) {
  return pois.sort(function(a, b) {
    var addressA = a.address.toUpperCase(); // ignore upper and lowercase
    var addressB = b.address.toUpperCase(); // ignore upper and lowercase
    if (addressA < addressB) {
      return -1;
    }
    if (addressA > addressB) {
      return 1;
    }

    return 0;
  });
}

const mapStateToProps = state => ({
  pois: sortPoisByAddress(state.pois),
  currentLocation: state.currentLocation
});

export default connect(mapStateToProps)(ListScreen);
