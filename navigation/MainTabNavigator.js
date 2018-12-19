import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import JottoScreen from "../screens/JottoScreen";
import StatsScreen from "../screens/StatsScreen";
import HighScoresScreen from "../screens/HighScoresScreen";
import SettingsScreen from "../screens/SettingsScreen";

JottoScreen.navigationOptions = {
  tabBarLabel: "Jotto",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const ScoresStackTab = createStackNavigator({
  HighScores: HighScoresScreen,
  Stats: StatsScreen
});

ScoresStackTab.navigationOptions = {
  tabBarLabel: "Scores",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

SettingsScreen.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

export default createBottomTabNavigator({
  JottoScreen,
  ScoresStackTab,
  SettingsScreen
});
