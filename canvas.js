let canvas = document.querySelector('canvas')
canvas.style.border = '1px solid black';
let ctx = canvas.getContext('2d')
//
let currentScene = 0
let riposteCount = 0
// splashScreen
let splash = new Image()
splash.src = './images/splashScreen.png'
// actionScreen
let action = new Image()
action.src = './images/Action.png'
// action.addEventListener('load', () => {})
// loseScreen
let loseBg = new Image()
loseBg.src = './images/loseBckgrnd.png'
// player
let playerIdleImg = new Image()
playerIdleImg.src = './images/PlayerIdle.png'
let playerTopImg = new Image()
playerTopImg.src = './images/PlayerTop.png'
let playerMidImg = new Image()
playerMidImg.src = './images/PlayerMid.png'
let playerBotImg = new Image()
playerBotImg.src = './images/PlayerBot.png'
let playerWalk1 = new Image()
playerWalk1.src = './images/PlayerWalk1.png'
let playerWalk2 = new Image()
playerWalk2.src = './images/PlayerWalk2.png'
let playerWalk3 = new Image()
playerWalk3.src = './images/PlayerWalk3.png'
// playerImg.addEventListener('load', () => {})
let playerX = 0
let playerY = 0
let playerStance = 0
let playerHlth = 6
let playerName = ''
let winAmnt = 0
let animCount = 0
// opponent
let opponentNameArr = ['Yeoman Yve', 'Sir Pers', 'Lord Joseph', 'Squire Fulk', 'Knight Eudon', 'Sir Barnaby', 'Sir Laselot', 'Squire Villiam']
let opponentIdle = new Image()
opponentIdle.src = './images/OpponentIdle.png'
let opponentTop = new Image()
opponentTop.src = './images/OpponentTop.png'
let opponentMid = new Image()
opponentMid.src = './images/OpponentMid.png'
let opponentBot = new Image()
opponentBot.src = './images/OpponentBot.png'
// opponentImg.addEventListener('load', () => {})
let opponentX = 0
let opponentY = 0
let opponentStance = 0
let opponentHlth = 3
let opponentName = ''
// Sounds
class sound {
    constructor(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function () {
            this.sound.play();
        };
        this.stop = function () {
            this.sound.pause();
        };
    }
}
let riposteSound = new sound('./sounds/swordhits/Ripostesound.mp3')
let hitSound = new sound('./sounds/swordhits/Playerhitsound.mp3')
let splashSound = new sound('./sounds/SplashSound.wav')
let playerHitSound = new sound('./sounds/HitSound.wav')
let crowdCheer = new sound('./sounds/Cheeer2.wav')
let winSound = new sound('./sounds/winSound.flac')
let loseSound = new sound('./sounds/LoseSound.wav')