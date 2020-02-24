import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../components/TabBarIcon";
import ListScreen from "../screens/ListScreen";
import MapsScreen from "../screens/MapScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "List";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="List"
        component={ListScreen}
        options={{
          title: "List",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-list" />
          )
        }}
      />
      <BottomTab.Screen
        name="Maps"
        component={MapsScreen}
        options={{
          title: "Map",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-map" />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "List":
      return "List";
    case "Maps":
      return "Map";
  }
}
