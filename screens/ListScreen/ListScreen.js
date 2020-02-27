import * as React from "react";
import { StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { ListItem } from "react-native-elements";
import { getDistance, convertDistance } from "geolib";
function ListScreen(props) {
  const { pois, location } = props;

  return (
    <ScrollView style={styles.container}>
      {!pois ? (
        <ActivityIndicator />
      ) : (
        pois.map((item, i) => (
          <ListItem
            key={i}
            title={item.address}
            bottomDivider
            subtitle={
              location
                ? convertDistance(
                    getDistance(
                      {
                        latitude: parseFloat(item.latitude),
                        longitude: parseFloat(item.longitude)
                      },
                      {
                        latitude: location.latitude,
                        longitude: location.longitude
                      }
                    ),
                    "km"
                  ) + " Km away from you"
                : " "
            }
          />
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
