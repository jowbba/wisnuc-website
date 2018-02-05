import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import css from 'Css/home'
import Content from './content'
import Nav from '../common/nav'
import contents from './contents'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      videoCover: false,
      navbar : false
    }
  }

  render() {
    let { width, height } = this.props.view
    let contentStyle = { width, height }
    let videoStyle = width/height > 1920/1080? {width: '100%'}: {height: '100%'}
    return (
      <div id={css.wrap}>
        {/* nav */}
        <Nav/>
        {/* navbar menu cover */}
        {this.state.navbar?<div id={css.navbar}>
          <nav id={css.menu}>
            <ul>
              <li><Link to='/' className={css.menu_link} style={{color: '#ef0d33'}}><span/>软件介绍</Link></li>
              <li><Link to='/download' className={css.menu_link}><span/>相关下载</Link></li>
              <li><Link to='/tutorial' className={css.menu_link}><span/>使用指南</Link></li>
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
        
        {/* hero */}
        <div id={css.hero} style={contentStyle}>
          {/* hero cover vide */}
          {this.state.videoCover?<div id={css.cover_video}>
            <button onClick={this.closeVideo.bind(this)}><span/><span/></button>
            <video autoPlay loop controls>
              <source src='http://k.youku.com/player/getFlvPath/sid/051393139206212af09cf/st/mp4/fileid/03001301005A3B6C635C1636B4D4B838D52B2B-B7EC-C67E-1901-2C7C3F24DC79?k=f8d96b1462e6dace282ceb0b&hd=2&myp=0&ts=109&ctype=12&ev=1&token=0514&oip=3413028674&ep=cieVGUCOV80J5yPZij8bNnrifSRZXP4J9h%2BEgtJjALshOevNn03XxJjDT%2FlBEIsdBiZ0GOj539Xl%0AGEJmYYJE3BsQrEivTPrh9%2FDi5a8gw%2BMDEBsyBr7QvVSeRjH1&ccode=050F&duration=108&expire=18000&psid=2f8d2fa46fd38b7fb1c87d3eaa7a311f&ups_client_netip=cb6eaf42&ups_ts=1513931392&ups_userid=917820600&utid=pP2GEl7DTCcCActur0LSBbKp&vid=XMzI1MDcwMjc0NA%3D%3D&vkey=Addac315887de45eacc6d90118d865b4d' type='video/mp4'/>
            </video>
          </div>:null}
          
          
          {/* hero left title*/}
          <div id={css.hero_item_left}>
            <div id={css.hero_left_text}>
              <p><span>珍</span><span>视 </span> <span style={{color: 'rgb(0, 150, 136)'}}> TA</span></p>
              <p>KEEP IT WELL</p>
            </div>
          </div>
          {/* hero right btn */}
          <div id={css.hero_item_right} onClick={this.openVideo.bind(this)}>
            <button id={css.btn_play}/>
          </div>
          {/* hero bg video */}
          <div id={css.hero_bg_video} style={contentStyle}>
            <video style={videoStyle} autoPlay loop muted>
              <source src={require('Video/home_bg.mp4')} type='video/mp4'/>
            </video>
            <div></div>
          </div>
        </div>
        {/* content */}
        {contents.map((item, index) => <Content infor={Object.assign({}, item, contentStyle)} key={index} index={index}/>)}
      </div>
    )
  }

  openVideo() {
    return window.open('http://v.youku.com/v_show/id_XMzI1MDcwMjc0NA==.html?spm=a2h3j.8428770.3416059.1')
    this.setState({ videoCover: true })
  }

  closeVideo() {
    this.setState({ videoCover: false})
  }

  toggleNavbar() {
    if (this.state.navbar) document.body.style = ''
    else document.body.style = 'overflow:hidden;'
    this.setState({ navbar: !this.state.navbar})
  }
}

var mapStateToProps = state => {
  return {
    view: state.view
  }
}

export default connect(mapStateToProps)(Home)