
const levelStep = () => {
    const step = Math.floor(Math.random() * 4) + 1
    step === 1 ? steps.push('one')
        : step === 2 ? steps.push('two')
            : step === 3 ? steps.push('three')
                : steps.push('four')
}

export { levelStep }
