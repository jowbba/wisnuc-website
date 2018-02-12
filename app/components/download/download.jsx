import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Nav from '../common/nav'
import NavbarMenu from '../common/navbarMenu'
import Tab from './tab'
import css from 'Css/download2'
import logo from 'Image/download-icon.png'
import files from './files'

class Download extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentWillMount() {
    document.body.style = ''
  }

  render() {
    return (
      <div style={{height: this.props.view.height, background: '#fafafa'}}>
        <header id={css.header}>
          <Nav show={true} background='rgba(0,0,0,0)'/>
          <div id={css.title}>WISNUC客户端下载</div>
          <img id={css.icon} src={logo} alt=""/>
        </header>
        <div id={css.content}>
          {/* 3 tab cards */}
          {files.map((item, index) => <Tab infor={item} key={index}/>)}
        </div>
        {/* navbar menu will show when screen size is smaller then 775px */}
        { this.props.view.width < 775 ?<NavbarMenu index={1}/>:null }
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

