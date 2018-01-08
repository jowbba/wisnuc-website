import React from 'react'
import { connect } from 'react-redux'
import Leftnav from './leftnav'
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

  render() {
    let { view, tutorial } = this.props
    let { width, height } = view
    let { toggle, part, line } = tutorial
    let menu = tutorials[part]
    let contentObj = menu.subContent[line]
    let headerStyle = {background: menu.bgColor}

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
          <header id={css.header} style={headerStyle}>
            <div id={css.header_title}>{menu.title} - {menu.subTitle[line]}</div>
          </header>
          <nav id={css.navbar}>
            <div className={css.toggle_button} onClick={this.openMenu.bind(this)}>
              <img src={require('Image/menu.png')} alt=""/>
            </div>
          </nav>
          {/* content body */}
          <div>
            
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
    view: state.view,
    tutorial: state.tutorial
  }
}

export default connect(mapStateToProps)(Tutorial)