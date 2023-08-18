const debounce = (func, delay) => {
    let currentTimeout

    return function() {
        clearTimeout(currentTimeout)
        currentTimeout = setTimeout(() => {
            func()
        }, delay)
    }
}

const printHello = () => {
    console.log("Hello")
}

const debouncedPrintHello = debounce(printHello, 500)

setTimeout(() => {
    debouncedPrintHello()
}, 0)

setTimeout(() => {
    debouncedPrintHello()
}, 300)

setTimeout(() => {
    debouncedPrintHello()
}, 1000)
