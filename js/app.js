const boxes = document.querySelectorAll('body div div')
const title = document.querySelector('h1')
const body = document.querySelector('body')
let steps = []
let level = 1
let UserInputs = []
const green = new Audio("http://127.0.0.1:5500/assets/green.mp3")
const red = new Audio("http://127.0.0.1:5500/assets/red.mp3")
const yellow = new Audio("http://127.0.0.1:5500/assets/yellow.mp3")
const blue = new Audio("https://github.com/Yousef-Baytam/Simon-Says/blob/main/assets/blue.mp3")
const wrong = new Audio("http://127.0.0.1:5500/assets/wrong.mp3")

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





