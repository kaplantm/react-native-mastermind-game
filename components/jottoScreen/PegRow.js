import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import OverallScoreBox from "./OverallScoreBox";
import RowScoreBox from "./RowScoreBox";
import CustomButton from "../shared/CustomButton";
import Colors from "../../shared/Colors";

export default class PegRow extends React.Component {
  render() {
    return (
      <View style={[styles.container]}>
        <View style={styles.code}>{this.props.children}</View>
        <View style={styles.score}>
          {this.props.type === "code" ? (
            <OverallScoreBox guessList={this.props.guessList} />
          ) : this.props.type === "entry" ? (
            <CustomButton
              onPress={this.props.addGuess}
              styleProp={
                ({
                  backgroundColor: Colors.colorKey.white,
                  aspectRatio: 1,
                  paddingTop: 0
                },
                this.props.lightScheme
                  ? {}
                  : {
                      color: Colors.colorKey.grey,
                      backgroundColor: Colors.colorKey.darkGrey,
                      borderColor: Colors.colorKey.blue,
                      borderWidth: 2
                    })
              }
            >
              <Text
                style={[
                  styles.buttonText,
                  this.props.lightScheme
                    ? {}
                    : { color: Colors.colorKey.lightGrey }
                ]}
              >
                +
              </Text>
              <Text
                style={[
                  styles.buttonTextMinor,
                  this.props.lightScheme
                    ? {}
                    : { color: Colors.colorKey.lightGrey }
                ]}
              >
                Guess
              </Text>
            </CustomButton>
          ) : (
            <RowScoreBox
              guessList={this.props.guessList}
              codeLength={this.props.codeLength}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 5
  },
  code: {
    flex: 3
  },
  score: {
    flex: 1
  },
  buttonText: {
    color: Colors.text,
    fontSize: 40
  },
  buttonTextMinor: {
    color: Colors.text
  }
});
