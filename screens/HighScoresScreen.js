import React from "react";
import { ScrollView, Text } from "react-native";
import Colors from "../shared/Colors";
import CustomButton from "../components/shared/CustomButton";
import { stylesLight, stylesDark } from "./highScoresStyles";
import { connect } from "react-redux";

class HighScoresScreen extends React.Component {
  static navigationOptions = {
    title: "High Scores",
    headerStyle: {
      backgroundColor: Colors.rowBg,
      borderBottomColor: Colors.borderLight,
      borderBottomWidth: 2
    },
    headerTitleStyle: {
      color: Colors.text
    }
  };

  render() {
    //styling dosen't work on this screen since i don't have redux connected yet
    let styles = this.props.lightScheme ? stylesLight : stylesDark;
    return (
      <ScrollView style={styles.container}>
        <Text>
          This screen will contain high scores ever and/or in the past 50 games.
          Scores based on time and guesses.
        </Text>
        <CustomButton
          onPress={() => this.props.navigation.navigate("Stats")}
          styleProp={styles.button}
        >
          <Text>More Details >></Text>
        </CustomButton>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    lightScheme: state.settingsReducer.lightScheme
  };
};

export default connect(mapStateToProps)(HighScoresScreen);
