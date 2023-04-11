function debounce(func, delay) {
    let currentTimeout
    return function () {
        clearTimeout(currentTimeout)
        currentTimeout = setTimeout(() => {
            func.apply(this, arguments)
        }, delay)
    }
}

// Example usage
const searchInput = document.querySelector('#search-input')
searchInput.addEventListener('input', debounce(function () {
    // Search logic goes here
}, 500))



function throttle(func, delay) {
    let lastCallTime = 0
    return function () {
        const currentTime = Date.now()
        if (currentTime - lastCallTime >= delay) {
            lastCallTime = currentTime
            func.apply(this, arguments)
        }
    }
}

// Example usage
window.addEventListener('scroll', throttle(function () {
    // Scroll logic goes here
}, 100))
