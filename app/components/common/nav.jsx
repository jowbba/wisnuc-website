import React from 'react'
import {Link } from 'react-router-dom'
import { connect } from 'react-redux'
import css from 'Css/nav'
class Nav extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <nav id={css.nav}>
        <div id={css.main}>
          <div id={css.logo}>logo</div>
          <ul>
            <li><Link to='/introduce'>软件介绍</Link></li>
            <li><Link to='/ws2i5i'>WS215i</Link></li>
            <li><Link to='/video'>概念视频</Link></li>
            <li><Link to='/support'>支持</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

var mapStateToProps = state => {
  return {
    view: state.view
  }
}

export default connect(mapStateToProps)(Nav)