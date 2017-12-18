import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers/reducer'

const store = createStore(reducer)
window.store = store

export default store