const actionCounter = () => {
    drawStatusBox()
    // setTimeout(() => {
    if (opponentStance === playerStance) {
        // playerHlth -= 1
        // opponentHlth -= 1
        riposteSound.play()
        drawStatusBox()
        fightRsltBox()
        ctx.fillText('Same position!', 310, 220)
        // ctx.fillText('Both received 1 damage!', 310, 240)
        riposteScreen()
        return
    } else if (opponentStance === 0 && (playerStance === 1)) {
        playerHlth -= 1
        playerHitSound.play()
        hitSound.play()
        drawStatusBox()
        fightRsltBox()
        ctx.fillText('The opponent deflects!', 310, 220)
        ctx.fillText('Thee hath taken damageth!', 310, 240)
    } else if (opponentStance === 1 && (playerStance === 2)) {
        playerHlth -= 1
        hitSound.play()
        playerHitSound.play()
        drawStatusBox()
        fightRsltBox()
        ctx.fillText('The opponent deflects!', 310, 220)
        ctx.fillText('Thee hath taken damageth!', 310, 240)
    } else if (opponentStance === 2 && (playerStance === 0)) {
        playerHlth -= 1
        hitSound.play()
        playerHitSound.play()
        drawStatusBox()
        fightRsltBox()
        ctx.fillText('You did not manage to deflect!', 310, 220)
        ctx.fillText('Thee hath taken damageth!', 310, 240)
    } else if (playerStance === 0 && (opponentStance === 1)) {
        opponentHlth -= 1
        crowdCheer.play()
        hitSound.play()
        drawStatusBox()
        fightRsltBox()
        ctx.fillText(`Thee deflect the opponent!`, 310, 220)
        ctx.fillText('Thee dealeth damageth!', 310, 240)
    } else if (playerStance === 1 && (opponentStance === 2)) {
        opponentHlth -= 1
        hitSound.play()
        crowdCheer.play()
        drawStatusBox()
        fightRsltBox()
        ctx.fillText(`Thee deflect the opponent!`, 310, 220)
        ctx.fillText('Thee dealeth damageth!', 310, 240)
    } else if (playerStance === 2 && (opponentStance === 0)) {
        opponentHlth -= 1
        hitSound.play()
        crowdCheer.play()
        drawStatusBox()
        fightRsltBox()
        ctx.fillText(`Thee striketh past the d'fence!`, 310, 220)
        ctx.fillText('Thee dealeth damageth!', 310, 240)
    }
    console.log('action called')
    // }, 3500)
    setTimeout(() => {
        drawStatusBox()
        resetPos()
        posBtns.classList.remove('hidden')
        duelBtn.classList.remove('hidden')
        actionImg()
    }, 2000)
}
const riposteScreen = () => {
    midBtn.removeEventListener('click', midBtnFunction)
    topBtn.removeEventListener('click', topBtnFunction)
    lowBtn.removeEventListener('click', lowBtnFunction)

    midBtn.addEventListener('click', riposteMidBtn)
    topBtn.addEventListener('click', riposteTopBtn)
    lowBtn.addEventListener('click', riposteBotBtn)

    ctx.drawImage(action, 0, 0)
    drawStatusBox()
    ctx.drawImage(findPlayerPos(), 350, 300)
    ctx.drawImage(findOppPos(), 450, 300)
    posBtns.classList.remove('hidden')
    riposteCount++
    console.log('riposte')
    ctx.fillStyle = 'black'
    ctx.font = '34px IM Fell DW Pica'
    ctx.fillText('Riposte!', 350, 200)
    ctx.fillText(`Thee has't ${(2000-riposteCount*100)/1000}s to decideth!`, 320, 240)
    setTimeout(() => {
        if (opponentStance === playerStance) {
            posBtns.classList.add('hidden')
            ctx.drawImage(action, 0, 0)
            fightRsltBox()
            drawStatusBox()
            ctx.drawImage(findPlayerPos(), 350, 300)
            ctx.drawImage(findOppPos(), 450, 300)
            playerHlth -= 1
            ctx.fillText('Same position!', 310, 220)
            ctx.fillText('Thee taketh damageth', 310, 240)
            setTimeout(() => {
                drawStatusBox()
                resetPos()
                posBtns.classList.remove('hidden')
                duelBtn.classList.remove('hidden')
                actionImg()
            }, 1500)
        } else {
            actionCounter()
        }
        midBtn.removeEventListener('click', riposteMidBtn)
        topBtn.removeEventListener('click', riposteTopBtn)
        lowBtn.removeEventListener('click', riposteBotBtn)
    }, 2000 - (riposteCount * 100))
}
const duelAnim = () => {
    let setIntervalId = 0
    let oppX = canvas.width - 200
    let PlayerX = 50
    setIntervalId = setInterval(() => {
        ctx.drawImage(action, 0, 0)
        drawStatusBox()
        ctx.drawImage(playerIdleImg, PlayerX, 300)
        ctx.drawImage(opponentIdle, oppX, 300)
        oppX -= 10
        PlayerX += 10
    }, 100);
    setTimeout(() => {
        drawStatusBox()
        clearInterval(setIntervalId)
    }, 3000)
    setTimeout(() => {
        ctx.drawImage(action, 0, 0)
        drawStatusBox()
        ctx.drawImage(findPlayerPos(), 350, 300)
        ctx.drawImage(findOppPos(), 450, 300)
    }, 3000)
    setTimeout(() => {
        clearInterval(setIntervalId)
        drawStatusBox()
        actionCounter()
    }, 3800)
}
const randomOppPos = () => {
    let rng = Math.floor(Math.random() * 3)
    opponentStance = rng
}
const resetPos = () => {
    // opponentImg.src = './images/OpponentIdle.png'
    // playerImg.src = './images/PlayerIdle.png'
}
const findOppPos = () => {
    switch (opponentStance) {
        case 0:
            return opponentBot
        case 1:
            return opponentMid
        case 2:
            return opponentTop
    }
}
const findPlayerPos = () => {
    switch (playerStance) {
        case 0:
            return playerBotImg
        case 1:
            return playerMidImg
        case 2:
            return playerTopImg
    }
}
const randomName = () => {
    let rng = Math.floor(Math.random() * opponentNameArr.length)
    opponentName = opponentNameArr[rng]
}
const loseAnim = () => {
    duelBtn.classList.add('hidden')
    posBtns.classList.add('hidden')
    let intervalId = 0
    playerY = 200
    intervalId = setInterval(() => {
        ctx.drawImage(loseBg, 0, 0)
        ctx.font = '34px IM Fell DW Pica'
        ctx.fillText(`Aft'r ${winAmnt} wins`, 70, 85)
        ctx.fillText(`Thee has't been did strike down by ${opponentName}!`, 70, 120)
        switch (animCount) {
            case 1:
                ctx.drawImage(playerWalk1, playerX, playerY)
                break;
            case 2:
                ctx.drawImage(playerWalk2, playerX, playerY)
                break;
            default:
                ctx.drawImage(playerWalk3, playerX, playerY)
                animCount = 0
                break;
        }
        playerX += 10
        animCount++
    }, 500)
    setTimeout(() => {
        resetBtn.classList.remove('hidden')
        resetBtn.addEventListener('click', () => {
            clearInterval(intervalId)
            windAmnt = 0
            location.reload();
        })
    }, 4000)

}
const winAnim = () => {
    contBut.removeEventListener('click', contBtnFunction)
    duelBtn.classList.add('hidden')
    posBtns.classList.add('hidden')
    contBut.classList.remove('hidden')
    ctx.drawImage(splash, 0, 0)
    ctx.font = '34px IM Fell DW Pica'
    ctx.fillText(`Thee has't best'd ${opponentName}!`, 70, 85)
    ctx.fillText(`So far thee has't wonneth ${winAmnt} duels!`, 70, 115)
    contBut.addEventListener('click', contBtnFunction)
}
const winGameAnim = () => {
    duelBtn.classList.add('hidden')
    posBtns.classList.add('hidden')
    winSound.play()
    ctx.drawImage(splash, 0, 0)
    ctx.font = '34px IM Fell DW Pica'
    ctx.fillText(`Thee has't best'd ev'ry foe!`, 70, 85)
    ctx.fillText(`Thee has't wonneth the tournament!`, 70, 125)
    ctx.fillText(`Magnificent damsels await thee!!`, 70, 165)
    setTimeout(() => {
        resetBtn.classList.remove('hidden')
        resetBtn.addEventListener('click', () => {
            windAmnt = 0
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
        ctx.font = '40px IM Fell DW Pica'
        ctx.fillText('The Duel', 350, 170)
    })
}
const fightRsltBox = () => {
    ctx.beginPath()
    ctx.fillStyle = '#8f792c'
    ctx.fillRect(300, 200, 280, 50)
    ctx.fillStyle = 'black'
    ctx.font = '20px IM Fell DW Pica serif'
    ctx.closePath()
}
const drawStatusBox = () => {
    ctx.beginPath()
    ctx.fillStyle = '#8f792c'
    ctx.fillRect(40, 200, 150, 80)
    ctx.fillStyle = 'black'
    ctx.font = '20px IM Fell DW Pica'
    ctx.fillText(playerName, 45, 220)
    ctx.fillText(`Health: ${playerHlth}`, 45, 245)
    ctx.fillText(`Wins: ${winAmnt}`, 45, 270)
    ctx.closePath()
    ctx.beginPath()
    ctx.fillStyle = '#8f792c'
    ctx.fillRect(700, 200, 150, 80)
    ctx.fillStyle = 'black'
    ctx.font = '20px IM Fell DW Pica'
    ctx.fillText(opponentName, 710, 220)
    ctx.fillText(`Health: ${opponentHlth}`, 710, 250)
    ctx.closePath()
}
const actionImg = () => {
    duelBtn.removeEventListener('click', duelBtnFunction)
    midBtn.removeEventListener('click', midBtnFunction)
    topBtn.removeEventListener('click', topBtnFunction)
    lowBtn.removeEventListener('click', lowBtnFunction)
    if (playerHlth <= 0) {
        loseAnim()
        return
    }
    if (opponentHlth <= 0) {
        winAmnt += 1
        winAnim()
        return
    }
    if (winAmnt >= 3) {
        winGameAnim()
        return
    }
    ctx.drawImage(action, 0, 0)
    drawStatusBox()
    ctx.drawImage(opponentIdle, canvas.width - 200, 300)
    ctx.drawImage(playerIdleImg, 50, 300)
    topBtn.addEventListener('click', topBtnFunction)
    midBtn.addEventListener('click', midBtnFunction)
    lowBtn.addEventListener('click', lowBtnFunction)
    duelBtn.addEventListener('click', duelBtnFunction)
}
inputName.addEventListener('change', (event) => {
    console.log('event change')
    enteredName = event.target.value
    console.log(event.target.value)
    console.log(enteredName)
})
const startGame = () => {
    splashSound.play()
    startBtn.addEventListener('click', () => {
        startBtn.classList.add('hidden')
        nameBox.classList.add('hidden')
        instructionBtn.classList.add('hidden')
        posBtns.classList.remove('hidden')
        duelBtn.classList.remove('hidden')
        currentScene = 1
        randomName()
        playerName = `S'r ${enteredName}`
        console.log('on start', enteredName)
        actionImg()
    })
    instructionBtn.addEventListener('click', () => {
        buttonContainerMain.classList.add('hidden')
        instrContainer.classList.remove('hidden')
        instrBackBtn.classList.remove('hidden')
        nameBox.classList.add('hidden')
        startBtn.classList.add('hidden')
        instructionBtn.classList.add('hidden')
        mainCanvasCont.classList.add('hidden')
    })
    instrBackBtn.addEventListener('click', () => {
        buttonContainerMain.classList.remove('hidden')
        console.log('back in instructions')
        instrContainer.classList.add('hidden')
        instrBackBtn.classList.add('hidden')
        nameBox.classList.remove('hidden')
        startBtn.classList.remove('hidden')
        instructionBtn.classList.remove('hidden')
        mainCanvasCont.classList.remove('hidden')
    })
}
splashImg()
startGame()







const contBtnFunction = () => {
    ctx.beginPath()
    duelBtn.classList.remove('hidden')
    posBtns.classList.remove('hidden')
    contBut.classList.add('hidden')
    randomName()
    opponentHlth = 3 + (winAmnt*2)
    actionImg()
    ctx.closePath()
}
const lowBtnFunction = () => {
    playerStance = 0
    ctx.drawImage(action, 0, 0)
    drawStatusBox()
    // opponentImg.addEventListener('load', () => {
    ctx.drawImage(opponentIdle, canvas.width - 200, 300)
    // })
    // playerImg.addEventListener('load', () => {
    ctx.drawImage(playerBotImg, 50, 300)
    // })
}
const midBtnFunction = () => {
    playerStance = 1
    ctx.drawImage(action, 0, 0)
    drawStatusBox()
    // opponentImg.addEventListener('load', () => {
    ctx.drawImage(opponentIdle, canvas.width - 200, 300)
    // })
    // playerMidImg.addEventListener('load', () => {
    ctx.drawImage(playerMidImg, 50, 300)
    // })
}
const topBtnFunction = () => {
    console.log('topbtn')
    playerStance = 2
    ctx.drawImage(action, 0, 0)
    drawStatusBox()
    // playerImg.addEventListener('load', () => {
    ctx.drawImage(playerTopImg, 50, 300)
    // })
    // opponentImg.addEventListener('load', () => {
    ctx.drawImage(opponentIdle, canvas.width - 200, 300)
    // })
}
const duelBtnFunction = () => {
    posBtns.classList.add('hidden')
    duelBtn.classList.add('hidden')
    console.log('duelclick')
    randomOppPos()
    console.log('opp stance', opponentStance)
    console.log('player stance', playerStance)
    ctx.drawImage(action, 0, 0)
    drawStatusBox()
    resetPos()
    ctx.drawImage(playerIdleImg, 50, 300)
    ctx.drawImage(opponentIdle, canvas.width - 200, 300)
    duelAnim()
}

const riposteTopBtn = () => {
    console.log('topbtn')
    playerStance = 2
    ctx.drawImage(action, 0, 0)
    drawStatusBox()
    ctx.drawImage(playerTopImg, 350, 300)
    ctx.drawImage(findOppPos(), 450, 300)
}
const riposteMidBtn = () => {
    playerStance = 1
    ctx.drawImage(action, 0, 0)
    drawStatusBox()
    ctx.drawImage(findOppPos(), 450, 300)
    ctx.drawImage(playerMidImg, 350, 300)
}
const riposteBotBtn = () => {
    playerStance = 0
    ctx.drawImage(action, 0, 0)
    drawStatusBox()
    ctx.drawImage(findOppPos(), 450, 300)
    ctx.drawImage(playerBotImg, 350, 300)
}