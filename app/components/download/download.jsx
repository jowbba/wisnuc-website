import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import css from 'Css/download2'
import logo from 'Image/logo.png'

class Download extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <header id={css.header}>
          <nav id={css.nav}>
            <div id={css.nav_content}>
              <img src={logo} alt=""/>
              <ul id={css.nav_list}>
                <li><Link to='/'>软件介绍</Link></li>
                <li><Link to='/download'>相关下载</Link></li>
                <li><Link to='/' style={{color:'gray', cursor: ''}} >使用指南</Link></li>
                <li><a href='http://bbs.wisnuc.com/forum.php'>论坛</a></li>
              </ul>
            </div>
          </nav>
          <div id={css.title}>WISNUC客户端下载</div>
        </header>
        <div>
          
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    view: state.view
  }
}

export default connect(mapStateToProps)(Download)

