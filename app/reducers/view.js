const defaultState = {
  width : document.body.clientWidth,
  height : document.body.clientHeight
}

const viewState = (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_SIZE':
      return Object.assign({}, state, {
        width: action.width,
        height: action.height
      })
    default:
      return state
  }
}

export default viewState