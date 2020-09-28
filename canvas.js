let canvas = document.querySelector('canvas')
canvas.style.border = '1px solid black';
let ctx = canvas.getContext('2d')
//

// splashScreen
let splash = new Image()
splash.src = '/images/splashScreen.png'
// actionScreen
let action = new Image()
action.src = '/images/Action.png'
action.addEventListener('load', () => {})
// loseScreen
let loseBg = new Image()
loseBg.src = '/images/loseBckgrnd.png'
// player
let playerImg = new Image()
playerImg.src = '/images/PlayerIdle.png'
playerImg.addEventListener('load', () => {})
let playerX = 0
let playerY = 0
let playerStance = 0
let playerHlth = 10
let playerName = ''
let winAmnt = 0
let animCount = 0
// opponent
let opponentNameArr = ['Yeoman Yve', 'Sir Pers', 'Lord Joseph', 'Squire Fulk', 'Knight Eudon', 'Sir Barnaby', 'Sir Laselot', 'Squire Villiam']
let opponentImg = new Image()
opponentImg.src = '/images/OpponentIdle.png'
let opponentX = 0
let opponentY = 0
let opponentStance = 0
let opponentHlth = 5
let opponentName = ''