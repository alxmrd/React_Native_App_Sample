import * as React from "react";
import { StyleSheet, ScrollView, View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { fetchPOIs } from "../store/actions/actions";
import { ListItem } from "react-native-elements";

class ListScreen extends React.Component {
  componentDidMount() {
    this.props.onfetchPOIs();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {!this.props.pois ? (
          <ActivityIndicator
            style={((alignItems = "center"), (justifyContent = "center"))}
            size="large"
            color="#0000ff"
          />
        ) : (
          this.props.pois.map((item, i) => (
            <ListItem
              key={i}
              title={item.address}
              // leftIcon={{ name: item.icon }}
              // bottomDivider
              // chevron
            />
          ))
        )}
      </ScrollView>
    );
  }
}

ListScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

const mapStateToProps = state => ({
  pois: state.pois
});
const mapDispatchToProps = dispatch => ({
  onfetchPOIs: () => dispatch(fetchPOIs())
});
export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
