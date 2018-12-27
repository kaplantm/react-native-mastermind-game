Mastermind code breaker game in react native w/ redux.

TODO

- could add high scores screen later (async storage)
- could add difficulty setting screen later (maybe try context?)
- should change score boxes to children of import PegRow from "./PegRow"; in parent component instead of using if in pegbox

- uninstall expo/samples?

<!-- need button to forfeit, maybe hint button -->

using async storage

have an array on complete games (including states so people can load states and view them)
have obj for current game - when game ends push it onto complete games array

load game and settings from async storage on open
save game on close

if game ended, push game onto save game list (max 10 games)
save settings on change

load saved games from async on view scores page

shared css
actually implment settings

clean up colors - just use colorkey

add sounds

shared sound objs?
one sound obj, multiple sources?

move has failed into redux game state?
