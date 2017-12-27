import React from 'react'
import { render }  from 'react-dom'
import { BrowserRouter, HashRouter, Route, Link, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './components/home/home'
import Introduce from './components/introduce/introduce'
import Ws215i from './components/ws215i/ws215i'
import Video from './components/video/video'
import Support from './components/support/support'
import Nav from './components/common/nav'
import NoMatch from './components/nomatch/noMatch'
import 'Font/font.css'
import css from 'Css/index.css'
import store from './store/store'
import Action from './action/action'

class App extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    store.dispatch(Action.setSize(document.body.clientWidth, document.body.offsetHeight))
    window.onresize = function() {
      store.dispatch(Action.setSize(document.body.clientWidth, document.body.offsetHeight))
    }

    window.onscroll = (e) => {
      store.dispatch(Action.setScroll(document.body.scrollTop || document.documentElement.scrollTop))
      
    }
  }

  render() {
    return (
      <div className='index-wrap'>
        <Nav/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/introduce' component={Introduce}/>
          <Route path='/download' component={Ws215i}/>
          <Route path='/video' component={Video}/>
          <Route path='/support' component={Support}/>
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