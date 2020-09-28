const actionCounter = () => {
    if (opponentStance = playerStance) {
        riposteScreen()
    } else if (opponentStance = 0 && (playerStance = 1)) {
        opponentImg.src = '/images/OpponentBot.png'
        playerHlth -= 1
        currentScene = 1
    } else if (opponentStance = 1 && (playerStance = 2)) {
        opponentImg.src = '/images/OpponentMid.png'
        playerHlth -= 2
        currentScene = 1
    } else if (opponentStance = 2 && (playerStance = 0)) {
        opponentImg.src = '/images/OpponentTop.png'
        playerHlth -= 3
        currentScene = 1
    } else if (playerStance = 0 && (opponentStance = 1)) {
        opponentImg.src = '/images/OpponentMid.png'
        opponentHlth -= 1
        currentScene = 1
    } else if (playerStance = 1 && (opponentStance = 2)) {
        opponentImg.src = '/images/OpponentTop.png'
        opponentHlth -= 2
        currentScene = 1
    } else if (playerStance = 2 && (opponentStance = 0)) {
        opponentImg.src = '/images/OpponentBot.png'
        opponentHlth -= 3
        currentScene = 1
    }
    console.log('action called')
    drawStatusBox()
}
const riposteScreen = () => {

}
const randomOppPos = () => {
    let rng = Math.floor(Math.random() * 4)
    opponentStance = rng
}
const randomName = () => {
    let rng = Math.floor(Math.random() * opponentNameArr.length)
    return opponentNameArr[rng]
}
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
const startGame = () => {
    inputName.addEventListener('change', (event) => {
        console.log('event change')
        inputName.value = event.target.value
        enteredName = event.target.value
    })
    startBtn.addEventListener('click', () => {
        startBtn.classList.add('hidden')
        nameBox.classList.add('hidden')
        posBtns.classList.remove('hidden')
        duelBtn.classList.remove('hidden')
        currentScene = 1
        opponentName = randomName()
    })
    duelBtn.addEventListener('click', () => {
        console.log('duelclick')
        randomOppPos()
        console.log(opponentStance)
        actionCounter()
    })
    switch (currentScene) {
        case 0:
            splashImg()
            break;
        case 1:
            actionImg()
            break;
        case 3:
            actionCounter()
            break;
        case 4:
            riposteScreen()
            break;
        case 5:
            loseAnim()
            break;

    }
}
startGame()