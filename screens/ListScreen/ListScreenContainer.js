import { connect } from "react-redux";
import ListScreen from "./ListScreen";

const mapStateToProps = state => ({
  pois: state.pois
});

export default connect(mapStateToProps)(ListScreen);
