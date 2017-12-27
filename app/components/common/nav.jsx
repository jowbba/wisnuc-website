import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import css from 'Css/nav'
import logo from 'Image/logo.png'
class Nav extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentWillReceiveProps(nextProps) {
    // console.log('receive')
  }

  render() {
    let { width, height, scrollTop } = this.props.view

    return (
      <nav id={css.nav} className={scrollTop>height-80?css.visible:css.invisible}>
        <div id={css.main}>
          <div id={css.logo}>
            <img src={logo} alt=""/>
          </div>
          <ul>
            <li><Link to='/'>软件介绍</Link></li>
            <li><Link to='/download'>相关下载</Link></li>
            <li><Link to='/' style={{color:'gray', cursor: ''}} >使用指南</Link></li>
            <li><a href='http://bbs.wisnuc.com/forum.php'>论坛</a></li>
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