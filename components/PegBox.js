import React from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Peg from "./Peg";

const pegs = [
  { color: "hsla(0, 64%, 74%, 1)", id: "r" },
  { color: "hsla(197, 64%, 74%, 1)", id: "b" },
  { color: "hsla(118, 64%, 74%, 1)", id: "g" },
  { color: "hsla(51, 85%, 74%, 1)", id: "y" }
];
export default class PegRow extends React.Component {
  _renderPegs = () => {
    return pegs.map(element => {
      if (this.props.type == "entry") {
        return (
          <TouchableOpacity style={{ flex: 1, margin: 10 }} key={element.id}>
            <Peg
              peg={element}
              styleProp={{
                backgroundColor: element.color
              }}
            />
          </TouchableOpacity>
        );
      } else {
        return (
          <Peg
            key={element.id}
            peg={element}
            styleProp={{ margin: 10, backgroundColor: element.color, flex: 1 }}
          />
        );
      }
    });
  };
  render() {
    return <View style={styles.container}>{this._renderPegs()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
});
