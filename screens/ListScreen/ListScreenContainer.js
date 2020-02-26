import { connect } from "react-redux";
import ListScreen from "./ListScreen";
import { orderByDistance } from "geolib";

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

export function sortPoisByLocation(location, pois) {
  const sorted = location =>
    orderByDistance(
      {
        latitude: location.latitude,
        longitude: location.longitude
      },
      pois.map(item => ({
        ...item,
        latitude: parseFloat(item.latitude),
        longitude: parseFloat(item.longitude)
      }))
    );

  return location ? sorted(location) : [];
}

const mapStateToProps = ({ permissionAnswer, currentLocation, pois }) => ({
  pois: permissionAnswer
    ? sortPoisByLocation(currentLocation, pois)
    : sortPoisByAddress(pois)
});

export default connect(mapStateToProps)(ListScreen);
