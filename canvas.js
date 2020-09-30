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
let playerImg = new Image()
playerImg.src = './images/PlayerIdle.png'
// playerImg.addEventListener('load', () => {})
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
opponentImg.src = './images/OpponentIdle.png'
opponentImg.addEventListener('load', () => {})
let opponentX = 0
let opponentY = 0
let opponentStance = 0
let opponentHlth = 5
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