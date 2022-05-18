const boxes = document.querySelectorAll('body div div')
const title = document.querySelector('h1')
const body = document.querySelector('body')
let steps = []
let level = 1
let UserInputs = []
const green = document.createElement('audio')
green.src = './assets/green.mp3'
const red = document.createElement('audio')
red.src = './assets/red.mp3'
const yellow = document.createElement('audio')
yellow.src = './assets/yellow.mp3'
const blue = document.createElement('audio')
blue.src = './assets/blue.mp3'
const wrong = document.createElement('audio')
wrong.src = './assets/wrong.mp3'

const listen = () => {
    steps = []
    level = 1
    body.addEventListener('keypress', start, { once: true })
}
listen()

for (let box of boxes) {
    box.addEventListener('click', (e) => {
        UserInputs.push(e.target.id)
        if (!verifyInput(e.target.id, UserInputs)) {
            title.innerText = `Game Over, Press any key to restart`
            disableDivs()
            wrong.play()
            listen()
            return
        } else if (UserInputs.length === steps.length) {
            level++
            audio(e.target.id)
            start()
        }
        audio(e.target.id)
    })
}

function start() {
    title.innerText = `Level ${ level }`
    UserInputs = []
    levelStep(steps)
    disableDivs()
    stepsPreview(steps)
}





