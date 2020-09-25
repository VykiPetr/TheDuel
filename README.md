# The Duel

## Description
The player must win a tournament in which consists of a certain amount of fast paced duels (duel amount might vary due to game difficulty which is yet unknown). The player must defeat knights in back to back duels by choosing a position of their sword from these, TOP, MIDDLE, BOTTOM. If both of the knigths have the same position a riposte happens where the player must choose a new position quickly, and everytime a riposte happens from a riposte the time you have to choose a new position decreases. 


## MVP (DOM - CANVAS)

- counts your current score(duel wins)
- The game has two characters
- Ability to choose from 3 stances/positions
- The AI/opponent chooses a stance at random
- Working riposte screen
- Riposte screen keeps getting faster
- back to back duels
- Animation for the begging of a duel
- sound for knight voice, sword clash, sword hit

## Backlog

- Add a scoreboard
- Make an upgrade section after a duel
- Ability to choose a knight model (new screen)

## Data structure

# main.js

- buildSplashScreen () {}
- buildGameScreen () {
      for the prepScreen
      for the duel screen
      for the riposte screen
}
- GameOverWin {}
- GameOverLose {}

# gameLogic
  
 - timerForRiposte () {}
 - aiPosLogic () {
    return ai pos
 }
 - choosingPos () {
    return player pos
 }
 - damageUpdate () {
    return health of player or ai
 }
 - logicWhenWinDuel () {}
 - logicWhenLoseDuel () {}
 
 # canvas.js
 
 
 -
 - drawPrepScreen () {}
 - drawMenus () {}
 - drawAiKnight () {}
 - drawPlayerKnight () {}
 - drawPrepScreen () {}
 - drawActionScreen () {}
 

## States y States Transitions
Definition of the different states and their transition (transition functions)

- Menu Screen
- gameScreen
- winScreen
- gameOverScreen


## Task
Task definition in order of priority

  - Make HTML
  - In Html make a basic menu screen
  - In Html add a start button
  - 
  - Make Canvas.js draw prep screen
  - in prep screen menu for Health, win amount, knight name
  - in prep screen have the ability to choose a pos with buttons
  - Make Canvas.js draw action screen animations
  - Draw a win screen
  - Draw a lose screen
  - Make GameLogic.js do checking for positions
  - Make GameLogic.js do logic of when a riposte happens
  - Make GameLogic.js count how many riposte and decrease the choosing time by this
  - Make GameLogic.js do logic of going back to prep screen when someone lands a hit
  - Make GameLogic.js do logic of player health going down to 0
  - Make GameLogic.js do logic of winning
  - figure out how to make sounds in this
  

## Links


### Trello
https://trello.com/b/u6nTRyDS/theduelproject (https://trello.com)


### Git
URls for the project repo and deploy
 - [https://github.com/VykiPetr/TheDuel](http://github.com)
 - [https://github.com/VykiPetr/TheDuel.git](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
