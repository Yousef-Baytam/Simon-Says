import { levelStep } from "./gameLogic"

const boxes = document.querySelectorAll('body div div')
const steps = []
const level = 1

for (let box of boxes) {
    box.addEventListener('click', (e) => {
        console.log(e.target.id)
    })
}