const actionCounter = () => {
    drawStatusBox()
    // setTimeout(() => {
    if (opponentStance === playerStance) {
        playerHlth -= 1
        opponentHlth -= 1
        riposteSound.play()
        drawStatusBox()
        fightRsltBox()
        ctx.fillText('Same position!', 310, 220)
        ctx.fillText('Both received 1 damage!', 310, 240)
    } else if (opponentStance === 0 && (playerStance === 1)) {
        playerHlth -= 1
        hitSound.play()
        drawStatusBox()
        fightRsltBox()
        ctx.fillText('The opponent parried you blow!', 310, 220)
        ctx.fillText('You received 1 damage!', 310, 240)
    } else if (opponentStance === 1 && (playerStance === 2)) {
        playerHlth -= 2
        hitSound.play()
        drawStatusBox()
        fightRsltBox()
        ctx.fillText('The opponent parried you overhead!', 360, 220)
        ctx.fillText('You received 2 damage!', 310, 240)
    } else if (opponentStance === 2 && (playerStance === 0)) {
        playerHlth -= 3
        hitSound.play()
        drawStatusBox()
        fightRsltBox()
        ctx.fillText('You did not manage to parry the overhead!', 360, 220)
        ctx.fillText('You received 3 damage!', 310, 240)
    } else if (playerStance === 0 && (opponentStance === 1)) {
        opponentHlth -= 1
        hitSound.play()
        drawStatusBox()
        fightRsltBox()
        ctx.fillText(`You parry the opponent's blow!`, 310, 220)
        ctx.fillText('You deal 1 damage!', 310, 240)
    } else if (playerStance === 1 && (opponentStance === 2)) {
        opponentHlth -= 2
        hitSound.play()
        drawStatusBox()
        fightRsltBox()
        ctx.fillText(`You parry the opponent's overhead!`, 310, 220)
        ctx.fillText('You deal 2 damage!', 310, 240)
    } else if (playerStance === 2 && (opponentStance === 0)) {
        opponentHlth -= 3
        hitSound.play()
        drawStatusBox()
        fightRsltBox()
        ctx.fillText(`You manage to go past the defence!`, 310, 220)
        ctx.fillText('You deal 3 damage!', 310, 240)
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
    posBtns.classList.add('hidden')
    riposteBtn.classList.remove('hidden')
    riposteCount++
    console.log('riposte')
    ctx.drawImage(action, 0, 0)
    ctx.fillStyle = '#756e75'
    ctx.font = '34px Verdana'
    ctx.fillText('Riposte!', 400, 200)
    ctx.fillText(`You have ${(2000-riposteCount*100)}  to decide!`, 320, 240)
    setTimeout(() => {}, 2000 - (riposteCount * 100))
}
const duelAnim = () => {
    let setIntervalId = 0
    let oppX = canvas.width - 150
    let PlayerX = 50
    setIntervalId = setInterval(() => {
        ctx.drawImage(action, 0, 0)
        drawStatusBox()
        playerImg.addEventListener('load', () => {
            ctx.drawImage(playerImg, PlayerX, 300)
        })
        opponentImg.addEventListener('load', () => {
            ctx.drawImage(opponentImg, oppX, 300)
        })
        oppX -= 10
        PlayerX += 10
    }, 100);
    setTimeout(() => {
        drawStatusBox()
        findOppPos()
        findPlayerPos()
        clearInterval(setIntervalId)
    }, 3000)
    setTimeout(() => {
        ctx.drawImage(action, 0, 0)
        drawStatusBox()
        playerImg.addEventListener('load', () => {
            ctx.drawImage(playerImg, 350, 300)
        })
        opponentImg.addEventListener('load', () => {
            ctx.drawImage(opponentImg, 470, 300)
        })
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
    opponentImg.src = './images/OpponentIdle.png'
    playerImg.src = './images/PlayerIdle.png'
}
const findOppPos = () => {
    switch (opponentStance) {
        case 0:
            opponentImg.src = './images/OpponentBot.png'
            break;
        case 1:
            opponentImg.src = './images/OpponentMid.png'
            break;
        case 2:
            opponentImg.src = './images/OpponentTop.png'
            break;
    }
}
const findPlayerPos = () => {
    switch (playerStance) {
        case 0:
            playerImg.src = './images/PlayerBot.png'
            break;
        case 1:
            playerImg.src = './images/PlayerMid.png'
            break;
        case 2:
            playerImg.src = './images/PlayerTop.png'
            break;
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
    playerImg.src = './images/PlayerWalk1.png'
    intervalId = setInterval(() => {
        ctx.drawImage(loseBg, 0, 0)
        ctx.font = '34px Verdana'
        ctx.fillText(`After ${winAmnt} wins`, 70, 85)
        ctx.fillText(`You have been struck down by ${opponentName}!`, 70, 120)
        switch (animCount) {
            case 1:
                playerImg.src = './images/PlayerWalk2.png'
                playerImg.addEventListener('load', () => {
                    ctx.drawImage(playerImg, playerX, playerY)
                })
                break;
            case 2:
                playerImg.src = './images/PlayerWalk3.png'
                playerImg.addEventListener('load', () => {
                    ctx.drawImage(playerImg, playerX, playerY)
                })
                break;
            default:
                playerImg.src = './images/PlayerWalk1.png'
                playerImg.addEventListener('load', () => {
                    ctx.drawImage(playerImg, playerX, playerY)
                })
                animCount = 0
                break;
        }
        console.log(playerImg.src)
        playerX += 5
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
    ctx.font = '34px Verdana'
    ctx.fillText(`You have bested ${opponentName}!`, 70, 85)
    ctx.fillText(`So far you have won ${winAmnt} duels!`, 70, 115)
    contBut.addEventListener('click', contBtnFunction)
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
const fightRsltBox = () => {
    ctx.beginPath()
    ctx.fillStyle = '#8f792c'
    ctx.fillRect(300, 200, 250, 50)
    ctx.fillStyle = 'black'
    ctx.font = '20px Verdana'
    ctx.closePath()
}
const drawStatusBox = () => {
    ctx.beginPath()
    ctx.fillStyle = '#8f792c'
    ctx.fillRect(40, 200, 150, 80)
    ctx.fillStyle = 'black'
    ctx.font = '20px Verdana'
    ctx.fillText(playerName, 45, 220)
    ctx.fillText(`Health: ${playerHlth}`, 45, 245)
    ctx.fillText(`Wins: ${winAmnt}`, 45, 270)
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
    duelBtn.removeEventListener('click', () => {})
    midBtn.removeEventListener('click', () => {})
    topBtn.removeEventListener('click', topBtnFunction)
    lowBtn.removeEventListener('click', () => {})
    if (playerHlth <= 0) {
        loseAnim()
        return
    }
    if (opponentHlth <= 0) {
        winAmnt += 1
        winAnim()
        return
    }
    ctx.drawImage(action, 0, 0)
    drawStatusBox()
    opponentImg.addEventListener('load', () => {
        ctx.drawImage(opponentImg, canvas.width - 150, 300)
    })
    playerImg.addEventListener('load', () => {
        ctx.drawImage(playerImg, 50, 280)
    })
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
        posBtns.classList.remove('hidden')
        duelBtn.classList.remove('hidden')
        currentScene = 1
        randomName()
        playerName = `Ser ${enteredName}`
        console.log('on start', enteredName)
        actionImg()
    })
}
splashImg()
startGame()




const contBtnFunction = () => {
    duelBtn.classList.remove('hidden')
    posBtns.classList.remove('hidden')
    contBut.classList.add('hidden')
    randomName()
    opponentHlth = 5 + (winAmnt + 1)
    actionImg()
}
const lowBtnFunction = () => {
    ctx.beginPath()
    playerImg.src = './images/PlayerBot.png'
    playerStance = 0
    ctx.drawImage(action, 0, 0)
    drawStatusBox()
    opponentImg.addEventListener('load', () => {
        ctx.drawImage(opponentImg, canvas.width - 150, 300)
    })
    playerImg.addEventListener('load', () => {
        ctx.drawImage(playerImg, 50, 300)
    })
    ctx.closePath()
}
const midBtnFunction = () => {
    ctx.beginPath()
    playerImg.src = './images/PlayerMid.png'
    playerStance = 1
    ctx.drawImage(action, 0, 0)
    drawStatusBox()
    opponentImg.addEventListener('load', () => {
        ctx.drawImage(opponentImg, canvas.width - 150, 300)
    })
    playerImg.addEventListener('load', () => {
        ctx.drawImage(playerImg, 50, 300)
    })
    ctx.closePath()
}
const topBtnFunction = () => {
    ctx.beginPath()
    playerImg.src = './images/PlayerTop.png'
    console.log('topbtn')
    playerStance = 2
    ctx.drawImage(action, 0, 0)
    drawStatusBox()
    playerImg.addEventListener('load', () => {
        ctx.drawImage(playerImg, 50, 250)
    })
    opponentImg.addEventListener('load', () => {
        ctx.drawImage(opponentImg, canvas.width - 150, 300)
    })
    ctx.closePath()
}
const duelBtnFunction = () => {
    ctx.beginPath()
    posBtns.classList.add('hidden')
    duelBtn.classList.add('hidden')
    console.log('duelclick')
    randomOppPos()
    console.log('opp stance', opponentStance)
    console.log('player stance', playerStance)
    ctx.drawImage(action, 0, 0)
    drawStatusBox()
    resetPos()
    playerImg.addEventListener('load', () => {
        ctx.drawImage(playerImg, 50, 300)
    })
    opponentImg.addEventListener('load', () => {
        ctx.drawImage(opponentImg, canvas.width - 150, 300)
    })
    duelAnim()
    ctx.closePath()
}