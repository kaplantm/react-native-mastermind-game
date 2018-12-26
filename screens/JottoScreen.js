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
import GameHeader from "../components/jottoScreen/GameHeader";
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
import Colors from "../shared/Colors";

const codeLength = 4; //TODO make this a setting
const pegSoundObject = new Expo.Audio.Sound();
const guessSoundObject = new Expo.Audio.Sound();
const winSoundObject = new Expo.Audio.Sound();

class JottoScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = {
    hasFailed: false
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

  playSound = async soundObject => {
    if (this.props.sounds) {
      soundObject.replayAsync();
    }
  };
  _handleGiveUp = async () => {
    this.setState({ hasFailed: true });
    await guessSoundObject.setRateAsync(0.5, "shouldCorrectPitch");
    this.playSound(guessSoundObject);
  };
  _handleSubmitGuess = () => {
    let score = compareCode(
      this.props.pegCodeList.pegs,
      this.props.pegList.pegs
    );
    try {
      if (score.score.hasWon) {
        this.playSound(winSoundObject);
      } else {
        this.playSound(guessSoundObject);
      }
    } catch (error) {
      console.warn(error);
    }
    this.props.addGuess(this.props.pegList, score, score.score.hasWon);
  };

  _handleChangePeg = peg => {
    try {
      this.playSound(pegSoundObject);
    } catch (error) {
      console.warn(error);
    }

    this.props.changePeg(peg);
  };
  _handleGameReset = async () => {
    this.setState({ hasFailed: false });
    this.props.resetGuesses();
    this.props.generateCode(codeLength);
    await guessSoundObject.setRateAsync(1, "shouldCorrectPitch");
    this.playSound(guessSoundObject);
  };
  render() {
    let styles = this.props.lightScheme ? stylesLight : stylesDark;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <GameHeader
            newGame={this.props.hasWon || this.state.hasFailed}
            resetGame={this._handleGameReset}
            giveUp={this._handleGiveUp}
          />

          <CodeContainer
            styleProps={styles.codeContainer}
            pegList={this.props.pegCodeList}
            guessList={this.props.guessList}
            hasWon={this.props.hasWon}
            hasFailed={this.state.hasFailed}
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
          ) : this.state.hasFailed ? (
            <View style={styles.newGuessContainer} />
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
    lightScheme: state.settingsReducer.lightScheme,
    sounds: state.settingsReducer.sounds
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
