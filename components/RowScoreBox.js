import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Peg from "./Peg";
import Colors from "../shared/Colors";

const pegs = [
  { color: Colors.scorePegs.grey, id: "pos1" },
  { color: Colors.scorePegs.grey, id: "pos2" },
  { color: Colors.scorePegs.grey, id: "pos3" },
  { color: Colors.scorePegs.grey, id: "pos4" }
];

export default class RowScoreBox extends React.Component {
  _renderPegs = () => {
    const { exactScore, containsScore } = this.props.guessList.score;
    let scoreArray = [];
    for (let i = 0; i < this.props.codeLength; i++) {
      if (i < exactScore) {
        scoreArray[i] = { color: Colors.scorePegs.black, id: "pos" + i };
      } else if (i < exactScore + containsScore) {
        scoreArray[i] = { color: Colors.scorePegs.grey, id: "pos" + i };
      } else {
        scoreArray[i] = { color: Colors.scorePegs.none, id: "pos" + i };
      }
    }
    //not sure shuffle array is neccessary, may just want to sort so black is first
    let pegElementList = scoreArray.map((element, index) => {
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
