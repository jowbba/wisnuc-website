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
import css from '../assets/css/index.css'
import store from './store/store'
import Action from './action/action'

class App extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    window.onresize = function() {
      store.dispatch(Action.setSize(document.body.clientWidth, document.body.offsetHeight))
    }

    window.onscroll = (e) => {
      console.log('scroll',document.documentElement.scrollTop, document.documentElement )
    }
  }

  render() {
    return (
      <div className='index-wrap' style={{height: '4000px'}}>
        <Nav/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/introduce' component={Introduce}/>
          <Route path='/ws2i5i' component={Ws215i}/>
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