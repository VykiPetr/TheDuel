let startBtn = document.querySelector('.btn-primary')
let nameBox = document.querySelector('.input-group.input-group-sm.mb-3')
let posBtns = document.querySelector('.btn-group')
let topBtn = document.querySelector('.top')
let midBtn = document.querySelector('.mid')
let lowBtn = document.querySelector('.low')
let duelBtn = document.querySelector('.duel')
let inputName = document.querySelector('.form-control')
let clearIntervale = document.querySelector('.clearInterval')
var enteredName = inputName.value
let currentScene = 0
startBtn.addEventListener('click', () => {
    startBtn.classList.add('hidden')
    actionImg()
})


// document.addEventListener('load', () => {
//     splashImg()
// })

