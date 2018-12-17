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
import {
  CHANGE_PEG_FUNCTION,
  GENERATE_CODE_FUNCTION,
  ADD_GUESS_FUNCTION
} from "../actions/function_constants";

class JottoScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.props.generateCode(4);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <CodeContainer
            pegList={this.props.pegCodeList}
            guessList={this.props.guessList}
          />
          <GuessHistoryContainer guessList={this.props.guessList} />
          <NewGuessContainer
            pegList={this.props.pegList}
            pegAction={this.props.changePeg}
            addGuess={() => this.props.addGuess(this.props.pegList)}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    pegList: state.guessReducer.pegEntryList,
    pegCodeList: state.codeReducer.pegCodeList,
    guessList: state.guessReducer.guessHistoryList
  };
};

const mapDispatchToProps = dispatch => ({
  changePeg: peg => {
    dispatch(CHANGE_PEG_FUNCTION(peg));
  },
  generateCode: length => {
    dispatch(GENERATE_CODE_FUNCTION(length));
  },
  addGuess: guess => {
    dispatch(ADD_GUESS_FUNCTION(guess));
  }
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
