const throttle = (func, delay) => {
    let lastCallTime = 0

    return function() {
        const currentTime = Date.now()
        if (currentTime - lastCallTime >= delay) {
            lastCallTime = currentTime
            func()
        }
    }
}

const printHello = () => {
    console.log("Hello")
}

const throttledPrintHello = throttle(printHello, 100)

const printHelloInterval = setInterval(() => {
    throttledPrintHello()
}, 10)

setTimeout(() => {
    clearInterval(printHelloInterval)
}, 1000)
