import React from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { compareCode } from "../shared/utils";
import CodeContainer from "../components/CodeContainer";
import GuessHistoryContainer from "../components/GuessHistoryContainer";
import NewGuessContainer from "../components/NewGuessContainer";
import Banner from "../components/Banner";
import { connect } from "react-redux";
import {
  CHANGE_PEG_FUNCTION,
  GENERATE_CODE_FUNCTION,
  ADD_GUESS_FUNCTION
} from "../actions/function_constants";

const codeLength = 4; //TODO make this a setting

class JottoScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.props.generateCode(codeLength);
    console.log(this.props.pegCodeList.pegs);
  }

  _handleSubmitGuess = () => {
    let score = compareCode(
      this.props.pegCodeList.pegs,
      this.props.pegList.pegs
    );
    this.props.addGuess(this.props.pegList, score, score.score.hasWon);
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <CodeContainer
            pegList={this.props.pegCodeList}
            guessList={this.props.guessList}
            hasWon={this.props.hasWon}
          />
          <GuessHistoryContainer
            guessList={this.props.guessList}
            codeLength={codeLength}
          />
          {this.props.hasWon ? (
            <Banner color="green" text="You Win" />
          ) : (
            <NewGuessContainer
              pegList={this.props.pegList}
              pegAction={this.props.changePeg}
              addGuess={this._handleSubmitGuess}
            />
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    pegList: state.guessReducer.pegEntryList,
    pegCodeList: state.codeReducer.pegCodeList,
    guessList: state.guessReducer.guessHistoryList,
    hasWon: state.guessReducer.hasWon
  };
};

const mapDispatchToProps = dispatch => ({
  changePeg: peg => {
    dispatch(CHANGE_PEG_FUNCTION(peg));
  },
  generateCode: length => {
    dispatch(GENERATE_CODE_FUNCTION(length));
  },
  addGuess: (guess, solved, hasWon) => {
    dispatch(ADD_GUESS_FUNCTION(guess, solved, hasWon));
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
