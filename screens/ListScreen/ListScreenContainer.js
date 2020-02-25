import { connect } from "react-redux";
import ListScreen from "./ListScreen";
var arraySort = require("array-sort");

export function sortPoisByAddress(pois) {
  return (sortPoisByAddress = arraySort(pois, "address"));
}

const mapStateToProps = state => ({
  pois: sortPoisByAddress(state.pois)
});

export default connect(mapStateToProps)(ListScreen);
