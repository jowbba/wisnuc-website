const defaultState = {
  part : 0,
  line : 0,
  toggle: false,
  mask: false
}

const tutorial = (state = defaultState, action) => {
  switch(action.type) {
    case 'OPEN_MENU':
      return Object.assign({}, state, { toggle: true })

    case 'CLOSE_MENU':
      return Object.assign({}, state, { toggle: false })
      
    case 'SET_TUTORIAL':
      return Object.assign({}, state, {
        part: action.part,
        line: action.line
      })
    default:
      return state
  }
}

export default tutorial