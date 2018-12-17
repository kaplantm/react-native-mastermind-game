import React from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Row from "./Row";
import Colors from "../constants/Colors";
import { changePeg } from "../actions/pegActions";
import { connect } from "react-redux";

class GuessHistoryContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Row
            type="entry"
            pegList={this.props.pegList}
            pegAction={this.props.changePeg}
          />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    pegList: state.pegReducer.pegEntryList
  };
};

const mapDispatchToProps = dispatch => ({
  changePeg: data => {
    dispatch(changePeg(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GuessHistoryContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: "hsla(197, 20%, 50%, 1)",
    borderBottomWidth: 2,
    borderBottomColor: Colors.rowBorder,
    backgroundColor: Colors.rowBg,
    shadowColor: "hsla(197, 20%, 50%, 1)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5
  }
});
