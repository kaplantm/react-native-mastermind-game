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
import Colors from "../constants/Colors";

export default class PegRow extends React.Component {
  _renderPegs = () => {
    const { pegList } = this.props;
    return pegList.map(element => {
      if (this.props.type == "entry") {
        return (
          <TouchableOpacity
            style={{ flex: 1, margin: 10 }}
            key={element.id}
            onPress={() => this.props.pegAction(element)}
          >
            <Peg
              peg={element}
              styleProp={{
                backgroundColor: Colors.codePegs[element.colorIndex].color
              }}
            />
          </TouchableOpacity>
        );
      } else {
        return (
          <Peg
            key={element.id}
            peg={element}
            styleProp={{
              margin: 10,
              backgroundColor: Colors.codePegs[element.colorIndex].color,
              flex: 1
            }}
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
