function debounce(callback, delay = 100) {
  let timer

  return function() {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback.apply(this, arguments)
    }, delay)
  }
}

export default {
  debounce
}
