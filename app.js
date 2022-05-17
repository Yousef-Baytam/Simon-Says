const boxes = document.querySelectorAll('body div div')
for (let box of boxes) {
    box.addEventListener('click', (e) => {
        console.log(e.target.id)
    })
}