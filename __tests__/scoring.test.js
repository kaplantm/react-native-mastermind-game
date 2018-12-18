import "react-native";
import React from "react";
import { compareCode } from "../shared/utils";

describe("Score Code Entry", () => {
  const codes = [
    [
      { colorIndex: 0, pegIndex: 0, id: "first" },
      { colorIndex: 1, pegIndex: 1, id: "second" },
      { colorIndex: 2, pegIndex: 2, id: "third" },
      { colorIndex: 3, pegIndex: 3, id: "fourth" }
    ],
    [
      { colorIndex: 2, pegIndex: 0, id: "first" },
      { colorIndex: 2, pegIndex: 1, id: "second" },
      { colorIndex: 1, pegIndex: 2, id: "third" },
      { colorIndex: 3, pegIndex: 3, id: "fourth" }
    ],
    [
      { colorIndex: 2, pegIndex: 0, id: "first" },
      { colorIndex: 2, pegIndex: 1, id: "second" },
      { colorIndex: 3, pegIndex: 2, id: "third" },
      { colorIndex: 3, pegIndex: 3, id: "fourth" }
    ]
  ];
  const guesses = [
    [
      { colorIndex: 0, pegIndex: 0, id: "first" },
      { colorIndex: 1, pegIndex: 1, id: "second" },
      { colorIndex: 2, pegIndex: 2, id: "third" },
      { colorIndex: 3, pegIndex: 3, id: "fourth" }
    ],
    [
      { colorIndex: 1, pegIndex: 0, id: "first" },
      { colorIndex: 2, pegIndex: 1, id: "second" },
      { colorIndex: 2, pegIndex: 2, id: "third" },
      { colorIndex: 0, pegIndex: 3, id: "fourth" }
    ],
    [
      { colorIndex: 3, pegIndex: 0, id: "first" },
      { colorIndex: 3, pegIndex: 1, id: "second" },
      { colorIndex: 1, pegIndex: 2, id: "third" },
      { colorIndex: 0, pegIndex: 3, id: "fourth" }
    ],
    [
      { colorIndex: 3, pegIndex: 0, id: "first" },
      { colorIndex: 2, pegIndex: 1, id: "second" },
      { colorIndex: 3, pegIndex: 2, id: "third" },
      { colorIndex: 2, pegIndex: 3, id: "fourth" }
    ]
  ];

  let scores = [
    {
      score: {
        exactScore: 4,
        containsScore: 0,
        hasWon: true
      }
    },
    {
      score: {
        exactScore: 1,
        containsScore: 2,
        hasWon: false
      }
    },
    {
      score: {
        exactScore: 0,
        containsScore: 3,
        hasWon: false
      }
    },
    {
      score: {
        exactScore: 1,
        containsScore: 2,
        hasWon: false
      }
    },
    {
      score: {
        exactScore: 1,
        containsScore: 2,
        hasWon: false
      }
    },
    {
      score: {
        exactScore: 1,
        containsScore: 1,
        hasWon: false
      }
    },
    {
      score: {
        exactScore: 2,
        containsScore: 2,
        hasWon: false
      }
    }
  ];
  it("should output how many pegs are exactly right, and how many are contained (code with no repeats) ", async () => {
    expect(compareCode(codes[0], guesses[0])).toEqual(scores[0]);
    expect(compareCode(codes[0], guesses[1])).toEqual(scores[1]);
    expect(compareCode(codes[0], guesses[2])).toEqual(scores[2]);
  });
  it("should output how many pegs are exactly right, and how many are contained (code with repeats) ", async () => {
    expect(compareCode(codes[1], guesses[0])).toEqual(scores[3]);
    expect(compareCode(codes[1], guesses[1])).toEqual(scores[4]);
    expect(compareCode(codes[1], guesses[2])).toEqual(scores[5]);
  });
  it("should output how many pegs are exactly right, and how many are contained (code with repeats) ", async () => {
    expect(compareCode(codes[2], guesses[3])).toEqual(scores[6]);
  });
});
