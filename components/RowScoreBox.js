import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { shuffleArray } from "../shared/utils";
import Peg from "./Peg";

const pegs = [
  { color: "hsla(197, 20%, 90%, 1)", id: "pos1" },
  { color: "hsla(197, 20%, 90%, 1)", id: "pos2" },
  { color: "hsla(197, 20%, 10%, 1)", id: "pos3" },
  { color: "hsla(197, 20%, 10%, 1)", id: "pos4" }
];

export default class OverallScoreBox extends React.Component {
  // _renderPegs = () => {
  //   return shuffleArray(pegs).map((element, index) => {
  //     return (
  //       <Peg
  //         key={element.id}
  //         peg={element}
  //         styleProp={{
  //           backgroundColor: element.color,
  //           borderColor: "grey",
  //           margin: 2
  //         }}
  //       />
  //     );
  //   });
  // };

  _renderPegs = () => {
    //not sure shuffle array is neccessary, may just want to sort so black is first
    let pegElementList = shuffleArray(pegs).map((element, index) => {
      return (
        <Peg
          key={element.id}
          peg={element}
          styleProp={{
            backgroundColor: element.color,
            borderColor: "grey",
            margin: 2,
            flex: 1
          }}
        />
      );
    });

    let pegDisplay = [];
    for (let i = 0; i < pegElementList.length; i += 2) {
      pegDisplay.push(
        <View key={"score" + i.toString()}>
          {pegElementList[i]}
          {pegElementList[i + 1]}
        </View>
      );
    }
    return pegDisplay;
  };

  render() {
    // return <View style={styles.container}>{this._renderPegs()}</View>;
    return <View style={styles.container}>{this._renderPegs()}</View>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10
  }
});
