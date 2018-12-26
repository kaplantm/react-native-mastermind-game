import React from "react";
import {
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { compareCode } from "../shared/utils";
import CodeContainer from "../components/jottoScreen/CodeContainer";
import GuessHistoryContainer from "../components/jottoScreen/GuessHistoryContainer";
import NewGuessContainer from "../components/jottoScreen/NewGuessContainer";
import Banner from "../components/shared/Banner";
import { connect } from "react-redux";
import {
  CHANGE_PEG_FUNCTION,
  GENERATE_CODE_FUNCTION,
  ADD_GUESS_FUNCTION,
  RESET_GUESSES_FUNCTION
} from "../actions/function_constants";
import { stylesLight, stylesDark } from "./jottoStyles";
import { Audio } from "expo";

const codeLength = 4; //TODO make this a setting
const pegSoundObject = new Expo.Audio.Sound();
const guessSoundObject = new Expo.Audio.Sound();
const winSoundObject = new Expo.Audio.Sound();

class JottoScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount = async () => {
    this.props.generateCode(codeLength);
    this.prepareSound();
  };

  prepareSound = async () => {
    await Expo.Audio.setIsEnabledAsync(true);
    await pegSoundObject.loadAsync(require("../assets/sounds/pop.wav"));
    await guessSoundObject.loadAsync(require("../assets/sounds/guess.wav"));
    await winSoundObject.loadAsync(require("../assets/sounds/win.wav"));
  };

  _handleSubmitGuess = async () => {
    let score = compareCode(
      this.props.pegCodeList.pegs,
      this.props.pegList.pegs
    );
    try {
      if (score.score.hasWon) {
        await winSoundObject.replayAsync();
      } else {
        await guessSoundObject.replayAsync();
      }

      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
    this.props.addGuess(this.props.pegList, score, score.score.hasWon);
  };

  _handleChangePeg = async peg => {
    try {
      await pegSoundObject.replayAsync();

      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }

    this.props.changePeg(peg);
  };
  _handleGameReset = () => {
    this.props.resetGuesses();
    this.props.generateCode(codeLength);
  };
  render() {
    let styles = this.props.lightScheme ? stylesLight : stylesDark;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <CodeContainer
            styleProps={styles.codeContainer}
            pegList={this.props.pegCodeList}
            guessList={this.props.guessList}
            hasWon={this.props.hasWon}
          />
          <GuessHistoryContainer
            guessList={this.props.guessList}
            codeLength={codeLength}
          />
          {this.props.hasWon ? (
            <Banner
              color="green"
              text="You Win"
              action={this._handleGameReset}
            />
          ) : (
            <NewGuessContainer
              pegList={this.props.pegList}
              pegAction={this._handleChangePeg}
              addGuess={this._handleSubmitGuess}
              styleProp={styles.newGuessContainer}
            />
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    pegList: state.gameReducer.pegEntryList,
    pegCodeList: state.gameReducer.pegCodeList,
    guessList: state.gameReducer.guessHistoryList,
    hasWon: state.gameReducer.hasWon,
    lightScheme: state.settingsReducer.lightScheme
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
  },
  resetGuesses: () => {
    dispatch(RESET_GUESSES_FUNCTION());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JottoScreen);
