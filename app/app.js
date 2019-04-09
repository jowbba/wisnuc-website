import React from 'react'
import { render }  from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './components/home/home'
import Download from './components/download/download'
import Tutorial from './components/tutorial/tutorial.jsx'
import NoMatch from './components/nomatch/noMatch'
import 'Font/font.css'
import 'Css/index.css'
import store from './store/store'
import Action from './action/action'

class App extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    // init & update global width/height
    let setSize = () => Action.setSize(document.body.offsetWidth, document.body.offsetHeight)
    store.dispatch(setSize())
    window.onresize = function() { store.dispatch(setSize())}
    // update global scroll
    window.onscroll = () => {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      store.dispatch(Action.setScroll(scrollTop))
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/download' component={Download}/>
          <Route path='/tutorial' component={Tutorial}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}

render((
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}