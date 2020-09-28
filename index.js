let startBtn = document.querySelector('.btn-primary')
let nameBox = document.querySelector('.input-group.input-group-sm.mb-3')
let posBtns = document.querySelector('.btn-group')
let topBtn = document.querySelector('.top')
let midBtn = document.querySelector('.mid')
let lowBtn = document.querySelector('.low')
let inputName = document.querySelector('.form-control')
let clearIntervale = document.querySelector('.clearInterval')
let enteredName = inputName.value

let intervalId = 0
startBtn.addEventListener('click', () => {
    startBtn.classList.add('hidden')
    actionImg()
})


// document.addEventListener('load', () => {
//     splashImg()
// })

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
        actionImg()
    })
}
intervalId = setInterval(() => {
    requestAnimationFrame(startGame)
},10)
clearIntervale.addEventListener('click', () => {
    clearInterval(intervalId)
})