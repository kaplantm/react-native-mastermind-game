import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import Colors from "../shared/Colors";
import StatsRow from "../components/settingsScreen/statsRow";
import { connect } from "react-redux";
import { UPDATE_SETTINGS_FUNCTION } from "../actions/function_constants";

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "Settings",
    headerStyle: {
      backgroundColor: Colors.rowBg,
      borderBottomColor: Colors.borderLight,
      borderBottomWidth: 2
    },
    headerTitleStyle: {
      color: Colors.text
    }
  };

  _toggleSetting(setting) {
    newSetting = !this.props[setting];
    this.props.updateSettings({ [setting]: newSetting });
  }

  render() {
    console.log(Colors.colorKey);
    return (
      <ScrollView style={styles.container}>
        <StatsRow
          containerStyle={styles.containerStyle}
          styleProp={[
            styles.box,
            this.props.sounds ? styles.onBox : styles.offBox
          ]}
          stylePropText={styles.boxText}
          label="Sounds:"
          toggle={this.props.sounds ? "ON" : "OFF"}
          onPress={() => this._toggleSetting("sounds")}
        />
        <StatsRow
          styleProp={[
            styles.box,
            this.props.lightScheme ? styles.lightBox : styles.darkBox
          ]}
          stylePropText={
            this.props.lightScheme ? styles.boxTextDark : styles.boxText
          }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white"
  },
  boxText: { color: Colors.colorKey.white, fontWeight: "600", fontSize: 20 },
  boxTextDark: {
    color: Colors.colorKey.black,
    fontWeight: "600",
    fontSize: 20
  },
  containerStyle: {
    alignItems: "flex-start",
    flex: 1
  },
  box: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 5,
    flex: 1
  },
  onBox: {
    backgroundColor: Colors.colorKey.darkGreen
    // aspectRatio: 1
  },
  offBox: {
    backgroundColor: Colors.colorKey.red
  },
  lightBox: {
    backgroundColor: Colors.colorKey.lightGrey
  },
  darkBox: {
    backgroundColor: Colors.colorKey.darkGrey
  }
});
