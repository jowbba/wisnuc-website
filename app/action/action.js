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
  },

  openMenu() {
    return {
      type: 'OPEN_MENU'
    }
  },

  closeMenu() {
    return {
      type: 'CLOSE_MENU'
    }
  },

  setTutorial(part, line) {
    return {
      type: 'SET_TUTORIAL',
      part, line
    }
  }
}