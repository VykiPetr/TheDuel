let startBtn = document.querySelector('.btn-primary')
let intervalId = 0
startBtn.addEventListener('click', () => {
    startBtn.classList.add('hidden')
    actionImg()
})

document.addEventListener('load', () => {
    splashImg()
})

const startGame = () => {
    startBtn.addEventListener('click', () => {
        startBtn.classList.add('hidden')
        actionImg()
    })
}
intervalId - setInterval(() => {
    requestAnimationFrame(startGame)
},10)