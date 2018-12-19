import React from "react";
import { Platform, Text } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import JottoScreen from "../screens/JottoScreen";
import StatsScreen from "../screens/StatsScreen";
import HighScoresScreen from "../screens/HighScoresScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Colors from "../shared/Colors";

JottoScreen.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text
      focused={focused}
      style={
        focused
          ? { color: Colors.tabIconSelected }
          : { color: Colors.tabIconDefault }
      }
    >
      Game
    </Text>
  ),
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
  tabBarLabel: ({ focused }) => (
    <Text
      focused={focused}
      style={
        focused
          ? { color: Colors.tabIconSelected }
          : { color: Colors.tabIconDefault }
      }
    >
      Scores
    </Text>
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

SettingsScreen.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text
      focused={focused}
      style={
        focused
          ? { color: Colors.tabIconSelected }
          : { color: Colors.tabIconDefault }
      }
    >
      Settings
    </Text>
  ),
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
