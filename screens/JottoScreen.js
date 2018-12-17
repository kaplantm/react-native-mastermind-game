import React from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import CodeContainer from "../components/CodeContainer";
import GuessHistoryContainer from "../components/GuessHistoryContainer";
import NewGuessContainer from "../components/NewGuessContainer";
import { connect } from "react-redux";

class JottoScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          {/* <CodeContainer /> */}
          {/* <GuessHistoryContainer /> */}
          <NewGuessContainer />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JottoScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    flex: 1
  }
});
