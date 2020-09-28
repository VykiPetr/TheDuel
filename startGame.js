const actionCounter = () => {
    if (opponentStance === playerStance) {
        riposteScreen()
    } else if (opponentStance === 0 && (playerStance === 1)) {

        opponentImg.src = '/images/OpponentBot.png'
        playerHlth -= 1
        currentScene = 1
        return
    } else if (opponentStance === 1 && (playerStance === 2)) {
        opponentImg.src = '/images/OpponentMid.png'
        playerHlth -= 2
        currentScene = 1
        return
    } else if (opponentStance === 2 && (playerStance === 0)) {
        opponentImg.src = '/images/OpponentTop.png'
        playerHlth -= 3
        currentScene = 1
        return
    } else if (playerStance === 0 && (opponentStance === 1)) {
        opponentImg.src = '/images/OpponentMid.png'
        opponentHlth -= 1
        currentScene = 1
        return
    } else if (playerStance === 1 && (opponentStance === 2)) {
        opponentImg.src = '/images/OpponentTop.png'
        opponentHlth -= 2
        currentScene = 1
        return
    } else if (playerStance === 2 && (opponentStance === 0)) {
        opponentImg.src = '/images/OpponentBot.png'
        opponentHlth -= 3
        currentScene = 1
        return
    }
    console.log('action called')
    ctx.drawImage(action, 0, 0)
    drawStatusBox()
    playerStance = 0

}
const riposteScreen = () => {
    
}
const randomOppPos = () => {
    let rng = Math.floor(Math.random() * 3)
    opponentStance = rng
}
const randomName = () => {
    let rng = Math.floor(Math.random() * opponentNameArr.length)
    opponentName = opponentNameArr[rng]
}
const loseAnim = () => {
    duelBtn.classList.add('hidden')
    posBtns.classList.add('hidden')
    let intervalId = 0
    let intervalId2 = 0
    playerY = 200
    playerImg.src = '/images/PlayerWalk1.png'
    intervalId = setInterval(() => {
        ctx.drawImage(loseBg, 0, 0)
        ctx.font = '34px Verdana'
        ctx.fillText(`After ${winAmnt} wins`, 70, 85)
        ctx.fillText(`You have been struck down by ${opponentName}!`, 70, 120)
        // ctx.drawImage(playerImg, playerX, playerY)
        // if (playerImg.src === '/images/PlayerWalk1.png') {
        //     playerImg.src = '/images/PlayerWalk2.png'
        // } else if (playerImg.src === '/images/PlayerWalk3.png') {
        //     playerImg.src = '/images/PlayerWalk1.png'
        // } else {
        //     playerImg.src = '/images/PlayerWalk3.png'
        // }
        // switch (playerImg.src) {
        //     case '/images/PlayerWalk1.png':
        //         playerImg.src = '/images/PlayerWalk2.png'
        //         break;
        //     case '/images/PlayerWalk3.png':
        //         playerImg.src = '/images/PlayerWalk1.png'
        //         break;
        //     default:
        //         playerImg.src = '/images/PlayerWalk3.png'
        //         break;
        // }
        switch (animCount) {
            case 1:
                playerImg.src = '/images/PlayerWalk2.png'
                ctx.drawImage(playerImg, playerX, playerY)
                break;
            case 2:
                playerImg.src = '/images/PlayerWalk3.png'
                ctx.drawImage(playerImg, playerX, playerY)
                break;
            default:
                playerImg.src = '/images/PlayerWalk1.png'
                ctx.drawImage(playerImg, playerX, playerY)
                animCount = 0
                break;
        }
        console.log(playerImg.src)
        playerX += 5
        animCount++
    }, 500)
    intervalId2 = setTimeout(() => {
        resetBtn.classList.remove('hidden')
        resetBtn.addEventListener('click', () => {
            location.reload();
        })
    }, 4000)
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
    // clearCanvas()
    ctx.drawImage(action, 0, 0)
    drawStatusBox()
    ctx.drawImage(opponentImg, canvas.width - 150, 300)
    ctx.drawImage(playerImg, 50, 280)
    topBtn.addEventListener('click', () => {
        playerImg.src = '/images/PlayerTop.png'
        playerStance = 2
        ctx.drawImage(action, 0, 0)
        drawStatusBox()
        ctx.drawImage(opponentImg, canvas.width - 150, 300)
        // playerImg.addEventListener('load', () => {
        //     ctx.drawImage(playerImg, 50, 280)
        // })
    })
    midBtn.addEventListener('click', () => {
        playerImg.src = '/images/PlayerMid.png'
        playerStance = 1
        ctx.drawImage(action, 0, 0)
        drawStatusBox()
        ctx.drawImage(opponentImg, canvas.width - 150, 300)
        playerImg.addEventListener('load', () => {
            ctx.drawImage(playerImg, 50, 300)
        })
    })
    lowBtn.addEventListener('click', () => {
        playerImg.src = '/images/PlayerBot.png'
        playerStance = 0
        ctx.drawImage(action, 0, 0)
        drawStatusBox()
        ctx.drawImage(opponentImg, canvas.width - 150, 300)
        playerImg.addEventListener('load', () => {
            ctx.drawImage(playerImg, 50, 300)
        })
    })
    duelBtn.addEventListener('click', () => {
        console.log('duelclick')
        randomOppPos()
        console.log('opp stance', opponentStance)
        console.log('player stance', playerStance)
        actionCounter()
        ctx.drawImage(action, 0, 0)
        drawStatusBox()
        playerImg.src = '/images/PlayerIdle.png'
        ctx.drawImage(playerImg, 50, 300)
        opponentImg.src = '/images/OpponentIdle.png'
        ctx.drawImage(opponentImg, canvas.width - 150, 300)
        if (playerHlth <= 0) {
            loseAnim()
        }
    })
}
inputName.addEventListener('change', (event) => {
    console.log('event change')
    enteredName = event.target.value
    console.log(event.target.value)
    console.log(enteredName)
})
const startGame = () => {
    // playerName = `Ser ${enteredName}`
    // console.log('on start', enteredName)
    // inputName.addEventListener('change', (event) => {
    //     console.log('event change')
    //     enteredName = inputName.value
    // // })
    startBtn.addEventListener('click', () => {
        startBtn.classList.add('hidden')
        nameBox.classList.add('hidden')
        posBtns.classList.remove('hidden')
        duelBtn.classList.remove('hidden')
        currentScene = 1
        randomName()
        playerName = `Ser ${enteredName}`
        console.log('on start', enteredName)
        actionImg()
    })
    // switch (currentScene) {
    //     case 0:
    //         splashImg()
    //         break;
    //     case 1:
    //         actionImg()
    //         break;
    //     case 3:
    //         actionCounter()
    //         break;
    //     case 4:
    //         riposteScreen()
    //         break;
    //     case 5:
    //         loseAnim()
    //         break;
    // }
}
// startBtn.addEventListener('click', () => {
//     startBtn.classList.add('hidden')
//     actionImg()
// })
splashImg()
startGame()