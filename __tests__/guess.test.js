import "react-native";
import React from "react";
import guessReducer from "../reducers/guessReducer";
import { CHANGE_PEG_COLOR, ADD_GUESS } from "../actions";
// import renderer from 'react-test-renderer';

const guessReducer_initialState = {
  pegEntryList: [
    { colorIndex: 0, pegIndex: 0, id: "first" },
    { colorIndex: 1, pegIndex: 1, id: "second" },
    { colorIndex: 2, pegIndex: 2, id: "third" },
    { colorIndex: 3, pegIndex: 3, id: "fourth" }
  ],
  guessHistoryList: []
};

describe("Guess Entry", () => {
  beforeEach(() => {
    // NavigationTestUtils.resetInternalState();
  });

  it("CHANGE_PEG_COLOR cycles peg color by one, never going over code length", async () => {
    const action1 = {
      type: CHANGE_PEG_COLOR,
      payload: {
        colorIndex: 2,
        id: "third",
        pegIndex: 2
      }
    };
    const action2 = {
      type: CHANGE_PEG_COLOR,
      payload: {
        colorIndex: 7,
        id: "second",
        pegIndex: 1
      }
    };
    expect(
      guessReducer(guessReducer_initialState, action1).pegEntryList
    ).toEqual([
      { colorIndex: 0, pegIndex: 0, id: "first" },
      { colorIndex: 1, pegIndex: 1, id: "second" },
      { colorIndex: 3, pegIndex: 2, id: "third" },
      { colorIndex: 3, pegIndex: 3, id: "fourth" }
    ]);
    expect(
      guessReducer(guessReducer_initialState, action2).pegEntryList
    ).toEqual([
      { colorIndex: 0, pegIndex: 0, id: "first" },
      { colorIndex: 0, pegIndex: 1, id: "second" },
      { colorIndex: 3, pegIndex: 2, id: "third" },
      { colorIndex: 3, pegIndex: 3, id: "fourth" }
    ]);
  });

  it("ADD_GUESS increments guessList", async () => {
    const guess = [
      { colorIndex: 0, pegIndex: 0, id: "first" },
      { colorIndex: 0, pegIndex: 1, id: "second" },
      { colorIndex: 0, pegIndex: 2, id: "third" },
      { colorIndex: 0, pegIndex: 3, id: "fourth" }
    ];

    const action1 = {
      type: ADD_GUESS,
      payload: guess
    };

    expect(
      guessReducer(guessReducer_initialState, action1).guessHistoryList.length
    ).toEqual(guessReducer_initialState.guessHistoryList.length + 1);
  });
});
