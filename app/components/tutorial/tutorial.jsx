import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Leftnav from './leftnav'
import ContentSection from './contentSection'
import css from 'Css/tutorial'
import tutorials from './tutorial.js'
import store from '../../store/store'
import Action from '../../action/action'

class Tutorial extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    
  }

  componentWillReceiveProps(nextprops) {
    // console.log(nextprops)
  }

  render() {
    let { view, tutorial, width, height } = this.props
    let { toggle, part, line } = tutorial
    let menu = tutorials[part]
    let contentObj = menu.content[line]
    let bgStyle = {background: menu.bgColor}
    let colorStyle = {color: menu.bgColor}
    let p = part.toString() + line.toString()
    return (
      <div style={{width, height}}>
        {/* left nav */}
        <Leftnav style={{ height }} class={toggle?css.open:css.close} 
          tutorials={tutorials} part={part} line={line}/>
        {/* mask cover */}
        <div id={css.mask_cover} 
          className={toggle?css.visible:css.invisible} 
          onClick={this.closeMenu.bind(this)}/>
        {/* content */}
        <div id={css.content}>
          {/* content header */}
          <header id={css.header} style={bgStyle}>
            <div id={css.header_title}>{menu.subTitle[line]}</div>
            <div id={css.header_nav}>
              <ul>
                <li><Link to='/'>软件介绍</Link></li>
                <li><Link to='/download'>相关下载</Link></li>
                <li><Link to='/tutorial'>使用指南</Link></li>
                <li><a href='http://bbs.wisnuc.com/forum.php'>论坛</a></li>
              </ul>
            </div>
          </header>
          <nav id={css.navbar}>
            <div className={css.toggle_button} onClick={this.openMenu.bind(this)}>
              <img src={require('Image/menu.png')} alt=""/>
            </div>
          </nav>
          {/* content body */}
          <div className={css.content_wrap}>
            {/* content title */}
            <h1 style={colorStyle} className={css.content_title}>{contentObj.title}</h1>
            {/* content description */}
            {contentObj.desrciption && <h2 className={css.content_description}>{contentObj.desrciption}</h2> }
            {/* content  */}
            {false && <nav className={css.chapter_toc} style={{borderLeftColor: menu.bgColor}}>
              <h1>内容</h1>
              <ul>
                {contentObj.subContent.map((item, index) => (
                 <li key={index}><a href={'#' + 'anchor' + index} style={colorStyle}>{item.articleTitle}</a></li>
                ))}
              </ul>
            </nav>}
            {/* section */}
            {contentObj.subContent.map((item, index) => 
            <ContentSection key={p+index} position={p+index} index={index} infor={Object.assign({},item,colorStyle)}/>)}
          </div>
        </div>
      </div>
    )
  }

  // toggle left nav menu
  openMenu() {
    store.dispatch(Action.openMenu())
  }

  closeMenu() {
    store.dispatch(Action.closeMenu())
  }
}

var mapStateToProps = state => {
  return {
    tutorial: state.tutorial,
    width: state.view.width,
    height: state.view.height
  }
}

export default connect(mapStateToProps)(Tutorial)