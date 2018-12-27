import React from "react";
import { Platform, Text } from "react-native";
import { createStackNavigator } from "react-navigation";

import JottoScreen from "../screens/JottoScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Colors from "../shared/Colors";

// JottoScreen.navigationOptions = {
//   // headerMode: "none",
//   headerVisible: false
// };

const mainStack = createStackNavigator({
  Mastermind: JottoScreen,
  Settings: SettingsScreen
});

export default mainStack;
