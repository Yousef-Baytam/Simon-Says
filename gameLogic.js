
const levelStep = (steps) => {
    const step = Math.floor(Math.random() * 4) + 1
    step === 1 ? steps.push('one')
        : step === 2 ? steps.push('two')
            : step === 3 ? steps.push('three')
                : steps.push('four')
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
}


