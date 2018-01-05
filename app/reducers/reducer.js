import { combineReducers } from 'redux'
import view from './view'
import tutorial from './tutorial'

const reducer = combineReducers({
  view, tutorial
})

export default reducer