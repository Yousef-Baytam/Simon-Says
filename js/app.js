const boxes = document.querySelectorAll('body div div')
const title = document.querySelector('h1')
const body = document.querySelector('body')
let steps = []
let level = 1
let UserInputs = []
const green = new Audio("http://127.0.0.1:5500/assets/green.mp3")
const red = new Audio("http://127.0.0.1:5500/assets/red.mp3")
const yellow = new Audio("http://127.0.0.1:5500/assets/yellow.mp3")
const blue = new Audio("http://127.0.0.1:5500/assets/blue.mp3")
const wrong = new Audio("http://127.0.0.1:5500/assets/wrong.mp3")

body.addEventListener('click', start, { once: true })

for (let box of boxes) {
    box.addEventListener('click', (e) => {
        UserInputs.push(e.target.id)
        if (!verifyInput(e.target.id, UserInputs)) {
            title.innerText = `You lose! Your score is ${ level }`
            disableDivs()
            return
        } else if (UserInputs.length === steps.length) {
            level++
            e.target.id === 'one' ? green.play()
                : e.target.id === 'two' ? blue.play()
                    : e.target.id === 'three' ? yellow.play()
                        : blue.play()
            start()
        }
        e.target.id === 'one' ? green.play()
            : e.target.id === 'two' ? blue.play()
                : e.target.id === 'three' ? yellow.play()
                    : blue.play()
    })
}

function start() {
    title.innerText = `Level ${ level }`
    UserInputs = []
    levelStep(steps)
    disableDivs()
    stepsPreview(steps)
}





