let canvas = document.querySelector('canvas')
canvas.style.border = '1px solid black';
let ctx = canvas.getContext('2d')
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
let playerName = `Ser ${enteredName}`
// opponent
let opponentNameArr = ['Yeoman Yve','Sir Pers','Lord Joseph','Squire Fulk','Knight Eudon','Sir Barnaby','Sir Laselot','Squire Villiame']
let opponentImg = new Image()
opponentImg.src = '/images/OpponentIdle.png'
let opponentX = 0
let opponentY = 0
let opponentStance = 0
let opponentHlth = 5
const randomName = () => {
    let rng = Math.floor(Math.random()*opponentNameArr.length)
    return opponentNameArr[rng]
}
let opponentName = randomName()

const loseAnim = () => {
    playerY = 200
    ctx.drawImage(loseBg, 0, 0)
    ctx.drawImage(playerImg, playerX, playerY)
    playerImg.src = '/images/PlayerWalk1.png'
    if (playerImg.src === '/images/PlayerWalk1.png') {
        playerImg.src = '/images/PlayerWalk2.png'
    } else if (playerImg.src === '/images/PlayerWalk3.png') {
        playerImg.src = '/images/PlayerWalk1.png'
    } else {
        playerImg.src = '/images/PlayerWalk3.png'
    }
    playerX += 5
}
const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}
const splashImg = () => {
    splash.addEventListener('load', () => {
        splashImg()
        ctx.drawImage(splash, 0, 0)
        ctx.font = '40px Verdana'
        ctx.fillText('The Duel', 350, 170)
    })
}
const drawStatusBox = () => {
    ctx.beginPath()
    ctx.fillStyle = '#8f792c'
    ctx.fillRect(40, 200, 150, 80)
    ctx.fillStyle = 'black'
    ctx.font = '20px Verdana'
    ctx.fillText(playerName, 45, 220)
    ctx.fillText(`Health: ${playerHlth}`, 45, 250)
    ctx.closePath()
    ctx.beginPath()
    ctx.fillStyle = '#8f792c'
    ctx.fillRect(700, 200, 150, 80)
    ctx.fillStyle = 'black'
    ctx.font = '20px Verdana'
    ctx.fillText(opponentName, 710, 220)
    ctx.fillText(`Health: ${opponentHlth}`, 710, 250)
    ctx.closePath()
}
const actionImg = () => {
    ctx.drawImage(action, 0, 0)
    drawStatusBox()
    ctx.drawImage(playerImg, 50, 300)
    ctx.drawImage(opponentImg, canvas.width - 150, 300)
    topBtn.addEventListener('click', () => {
        playerImg.src = '/images/PlayerTop.png'
        playerStance = 2
        playerImg.addEventListener('load', () => {})
        ctx.drawImage(action, 0, 0)
        drawStatusBox()
        ctx.drawImage(opponentImg, canvas.width - 150, 300)
        ctx.drawImage(playerImg, 50, 260)
    })
    midBtn.addEventListener('click', () => {
        playerImg.src = '/images/PlayerMid.png'
        playerStance = 1
        ctx.drawImage(action, 0, 0)
        drawStatusBox()
        ctx.drawImage(opponentImg, canvas.width - 150, 300)
        ctx.drawImage(playerImg, 50, 280)
    })
    lowBtn.addEventListener('click', () => {
        playerImg.src = '/images/PlayerBot.png'
        playerStance = 0
        ctx.drawImage(action, 0, 0)
        drawStatusBox()
        ctx.drawImage(opponentImg, canvas.width - 150, 300)
        ctx.drawImage(playerImg, 50, 280)
    })
}
splashImg()