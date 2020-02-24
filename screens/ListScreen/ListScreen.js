import * as React from "react";
import { StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { ListItem } from "react-native-elements";

function ListScreen(props) {
  const { pois } = props;
  return (
    <ScrollView style={styles.container}>
      {!pois ? (
        <ActivityIndicator
          style={((alignItems = "center"), (justifyContent = "center"))}
          size="large"
          color="#0000ff"
        />
      ) : (
        pois.map((item, i) => (
          <ListItem key={i} title={item.address} bottomDivider />
        ))
      )}
    </ScrollView>
  );
}

ListScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ListScreen;
