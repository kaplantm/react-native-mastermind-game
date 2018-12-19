import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import Colors from "../shared/Colors";
import CustomButton from "../components/CustomButton";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "High Scores",
    headerStyle: {
      backgroundColor: Colors.pageBg
    },
    headerTitleStyle: {
      color: Colors.text
    }
  };

  render() {
    console.log(Colors.pagebg);
    return (
      <ScrollView style={styles.container}>
        <Text>
          This screen will contain high scores ever and/or in the past 50 games.
          Scores based on time and guesses.
        </Text>
        <CustomButton onPress={() => this.props.navigation.navigate("Stats")}>
          <Text>More Details >></Text>
        </CustomButton>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white"
  }
});
