import React from 'react'
import { render }  from 'react-dom'
import { BrowserRouter, HashRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './components/home/home'
import Introduce from './components/introduce/introduce'
import Ws215i from './components/ws215i/ws215i'
import Video from './components/video/video'
import Support from './components/support/support'
import Nav from './components/common/nav'
import NoMatch from './components/nomatch/noMatch'
import css from '../assets/css/index.css'

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id='index-wrap'>
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

  componentDidMount() {
    window.onresize = function() {
      console.log(document.body.offsetWidth, document.body.offsetHeight)
    }
  }
}

render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}