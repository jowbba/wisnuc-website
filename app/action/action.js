export default {
  setSize(width, height) {
    return {
      type: 'SET_SIZE',
      width, height
    }
  },

  setScroll(scrollTop) {
    return {
      type: 'SET_SCROLL',
      scrollTop
    }
  }
}