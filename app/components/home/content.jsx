import React from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'
import css from 'Css/home'

class Content extends React.Component {
  constructor() {
    super()
    this.state = {show: false}
  }

  componentWillUpdate() {
    // console.log(ReactDom.findDOMNode(this.refs.wrap).offsetTop, this.props.view.scrollTop)
    if (this.props.view.scrollTop > ReactDom.findDOMNode(this.refs.wrap).offsetTop - 800) {
      if (!this.state.show) {
        this.setState({show: true})
      }
    }
  }

  render() {
    let infor = this.props.infor
    let { backgroundColor, color } = this.props.infor
    let containerStyle = { backgroundColor, color }
    let splitLineStyle = this.props.index % 2 == 0? {backgroundColor:'#fff'}: {backgroundColor:'#000'}
    return (
      <section className={this.state.show?css.container + ' ' + css.up:css.container} style={containerStyle} ref='wrap'>
        <div>
          <article className={css.content_text} style={{top: infor.top}}>
            <div className={css.title}>
              {infor.title.map((item, index) => <p key={index}>{item}</p>)}
            </div>
            <div className={css['split-line']} style={splitLineStyle}/>
            <div className={css.detail}>
              {infor.subTitle.map((item, index) => <p key={index}>{item}</p>)}
            </div>
            {infor.subImage?<img className={css.subImage} src={infor.subImage}/>:null}
          </article>
          <img className={css.content_img} src={infor.image}/>
        </div>
      </section>
    )
  }
}

var mapStateToProps = state => {
  return {
    view: state.view
  }
}

export default connect(mapStateToProps)(Content)