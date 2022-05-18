const boxes = document.querySelectorAll('body div div')
const title = document.querySelector('h1')
const body = document.querySelector('body')
let steps = []
let level = 1
let UserInputs = []

body.addEventListener('click', play, { once: true })

for (let box of boxes) {
    box.addEventListener('click', (e) => {
        UserInputs.push(e.target.id)
        // console.log(e.target.id)
        // console.log(UserInputs)
        // console.log(steps[UserInputs.length - 1])
        // console.log(verifyInput(e.target.id, UserInputs))
        if (!verifyInput(e.target.id, UserInputs)) {
            title.innerText = `You lose! Your score is ${ level }`
            return
        } else if (UserInputs.length === steps.length) {
            level++
            play()
        }
    })
}

function play() {
    title.innerText = `Level ${ level }`
    UserInputs = []
    levelStep(steps)
    disableDivs()
    stepsPreview(steps)
}





