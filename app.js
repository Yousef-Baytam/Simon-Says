const boxes = document.querySelectorAll('body div div')
const title = document.querySelector('h1')
const body = document.querySelector('body')
let steps = []
const level = 1

body.addEventListener('click', play, { once: true })

for (let box of boxes) {
    box.addEventListener('click', (e) => {
        console.log(e.target.id)
    })
}

function play() {
    title.innerText = `Level ${ level }`
}