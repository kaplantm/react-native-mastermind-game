import React from "react";
import { ScrollView, Text } from "react-native";
import Colors from "../shared/Colors";

import StatsRow from "../components/settingsScreen/statsRow";
import { connect } from "react-redux";
import { UPDATE_SETTINGS_FUNCTION } from "../actions/function_constants";
import { stylesLight, stylesDark } from "./settingsStyles";
import { playSound, storeData, retrieveData } from "../shared/utils";

const buttonSoundObject = new Expo.Audio.Sound();

class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Settings",
      headerStyle: {
        backgroundColor: Colors.colorKey.lightGrey,
        borderBottomColor: Colors.borderLight,
        borderBottomWidth: 2
      },
      headerTitleStyle: {
        color: Colors.text
      }
    };
  };
  componentDidMount = async () => {
    await buttonSoundObject.loadAsync(require("../assets/sounds/click.wav"));
  };

  _toggleSetting = async setting => {
    console.log("toggle");
    newSetting = !this.props[setting];

    if (setting === "sounds") {
      buttonSoundObject.replayAsync();
    } else {
      this.props.sounds && buttonSoundObject.replayAsync();
      storeData("lightScheme", newSetting);
    }
    this.props.updateSettings({ [setting]: newSetting });
  };

  render() {
    let styles = this.props.lightScheme ? stylesLight : stylesDark;
    return (
      <ScrollView style={styles.container}>
        <StatsRow
          containerStyle={styles.containerStyle}
          styleProp={[
            styles.box,
            this.props.sounds ? styles.onBox : styles.offBox
          ]}
          stylePropsContainer={[styles.rowContainer]}
          stylePropText={styles.boxText}
          label="Sounds:"
          toggle={this.props.sounds ? "ON" : "OFF"}
          onPress={() => this._toggleSetting("sounds")}
        />

        <StatsRow
          containerStyle={styles.containerStyle}
          styleProp={[
            styles.box,
            this.props.lightScheme ? styles.onBox : styles.offBox
          ]}
          stylePropsContainer={[styles.rowContainer]}
          stylePropText={styles.boxText}
          label="Color Scheme:"
          toggle={this.props.lightScheme ? "LIGHT" : "DARK"}
          onPress={() => this._toggleSetting("lightScheme")}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    sounds: state.settingsReducer.sounds,
    lightScheme: state.settingsReducer.lightScheme
  };
};

const mapDispatchToProps = dispatch => ({
  updateSettings: data => {
    dispatch(UPDATE_SETTINGS_FUNCTION(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsScreen);
