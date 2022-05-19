
const levelStep = (steps) => {
    const step = Math.floor(Math.random() * 4) + 1
    step === 1 ? steps.push('one')
        : step === 2 ? steps.push('two')
            : step === 3 ? steps.push('three')
                : steps.push('four')
}

const audio = (divId) => {
    divId === 'one' ? green.play()
        : divId === 'two' ? red.play()
            : divId === 'three' ? yellow.play()
                : blue.play()
}

const disableDivs = () => {
    for (let box of boxes)
        box.classList.add('disabled')
}

const enableDivs = () => {
    for (let box of boxes)
        box.classList.remove('disabled')
}

const stepsPreview = (steps) => {
    let box = {}
    let x = 0
    const i = setInterval(() => {
        let step = steps[x]
        for (let i of boxes) {
            if (i.id === step)
                box = i
        }
        box.classList.add('clicked')
        setTimeout(() => box.classList.remove('clicked'), 500)
        x++
        if (x === steps.length)
            clearInterval(i)
    }, 1000)
    setTimeout(enableDivs, steps.length * 1000)
}

const verifyInput = (input, UserInputs) => {
    return input === steps[UserInputs.length - 1]
}
