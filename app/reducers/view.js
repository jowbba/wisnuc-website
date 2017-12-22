const defaultState = {
  width : document.body.clientWidth - 18,
  height : document.body.clientHeight > 500? document.body.clientHeight: 500,
  scrollTop: 0
}

const viewState = (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_SIZE':
      let minHeight = action.height > 500?action.height:500
      return Object.assign({}, state, {
        width: action.width,
        height: minHeight
      })
    case 'SET_SCROLL':
      return Object.assign({}, state, {
        scrollTop: action.scrollTop
      })
    default:
      return state
  }
}

export default viewState