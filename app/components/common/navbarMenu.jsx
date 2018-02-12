import React from 'react'
import { Link } from 'react-router-dom'
import css from 'Css/home'

class NavbarMenu extends React.Component {
  constructor() {
    super()
    this.state = { navbar : false }
  }

  render() {
    return (
      <div>
        {this.state.navbar?<div id={css.navbar}>
          <nav id={css.menu}>
            <ul>
              <li><Link to='/' className={css.menu_link} style={this.props.index==0?{color: '#ef0d33'}:{}}><span/>软件介绍</Link></li>
              <li><Link to='/download' className={css.menu_link} style={this.props.index==1?{color: '#ef0d33'}:{}}><span/>相关下载</Link></li>
              <li><Link to='/tutorial' className={css.menu_link} style={this.props.index==2?{color: '#ef0d33'}:{}}><span/>使用指南</Link></li>
              <li><a href='http://bbs.wisnuc.com/forum.php' className={css.menu_link}><span/>论坛</a></li>
            </ul>
          </nav>
        </div>:null}
         {/* hero top bar */}
        <div id={css.hero_top}>
          <img src={require('Image/logo.png')} alt=""/>
          <div href="#" id={css.navbar__opener} className={this.state.navbar?css.close_btn:''} 
            onClick={this.toggleNavbar.bind(this)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    )
  }

  toggleNavbar() {
    if (this.state.navbar) document.body.style = ''
    else document.body.style = 'overflow:hidden;'
    this.setState({ navbar: !this.state.navbar})
  }
}

export default NavbarMenu