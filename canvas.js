let canvas = document.querySelector('canvas')
canvas.style.border = '1px solid black';
let ctx = canvas.getContext('2d')
// splashScreen
let splash = new Image()
splash.src = '/TheDuel/images/splashScreen.png'
// actionScreen
let action = new Image()
action.src = '/TheDuel/images/Action.png'
action.addEventListener('load', () => {
})
// loseScreen
let loseBg = new Image()
loseBg.src = '/TheDuel/images/loseBckgrnd.png'
// player
let playerImg = new Image()
playerImg.src = '/TheDuel/images/PlayerIdle.png'
let playerX = 0
let playerY = 0
// opponent
let opponentImg = new Image()
opponentImg.src = '/TheDuel/images/OpponentIdle.png'

const loseAnim = () => {
    playerY = 200
    let intervalId = 0
    ctx.drawImage(loseBg, 0, 0)
    intervalId = setInterval(() => {
        ctx.drawImage(loseBg, 0, 0)
        ctx.drawImage(playerImg, playerX, playerY)
        if (playerImg.src === '/TheDuel/images/PlayerWalk1.png') {
            playerImg.src = '/TheDuel/images/PlayerWalk2.png'
        } else if (playerImg.src = '/TheDuel/images/PlayerWalk3.png') {
            playerImg.src = '/TheDuel/images/PlayerWalk1.png'
        } else {
            playerImg.src = '/TheDuel/images/PlayerWalk3.png'
        }
        playerX += 5  
    }, 100)
}
const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

const splashImg = () => {
    splash.addEventListener('load', () => {
        splashImg()
        ctx.drawImage(splash, 0, 0)
        ctx.fillText('The Duel', 420, 200)
        
    })
}

const actionImg = () => {
        ctx.drawImage(action,0 ,0)
        ctx.drawImage(playerImg, 50, 300)
        ctx.drawImage(opponentImg, canvas.width-150, 300)
}
splashImg()
