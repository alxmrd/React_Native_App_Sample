import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";
import { fetchPOIs } from "../store/actions/actions";

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.onfetchPOIs();
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#416591", "#416591", "#145D75", "#190C41", "#001126"]}
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5
          }}
        >
          <Text style={styles.helloText}>Hello!</Text>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => navigation.navigate("Root")}
          >
            <Text style={styles.navigateText}>NAVIGATE</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#26D0C2",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  navigateText: {
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
    color: "white",
    fontSize: 17
  },
  helloText: {
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
    color: "white",
    fontSize: 40,
    justifyContent: "flex-start"
  }
});

const mapStateToProps = state => ({
  pois: state.pois
});
const mapDispatchToProps = dispatch => ({
  onfetchPOIs: () => dispatch(fetchPOIs())
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
