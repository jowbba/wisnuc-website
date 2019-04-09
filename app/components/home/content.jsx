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
    // calculate scroll top && show transform 
    let sTop = this.props.view.scrollTop
    let contentPosition = ReactDom.findDOMNode(this.refs.wrap).offsetTop - 800
    if (sTop > contentPosition && !this.state.show) this.setState({show: true})
  }

  render() {
    let infor = this.props.infor
    let { backgroundColor, color } = infor
    let containerStyle = { backgroundColor, color }
    let splitLineStyle = this.props.index % 2 == 0? {backgroundColor:'#fff'}: {backgroundColor:'#000'}
    return (
      <section className={this.state.show?css.container + ' ' + css.up:css.container} style={containerStyle} ref='wrap'>
        <div>
          {/* text in content */}
          <article className={css.content_text + ' ' + css[infor.topDistance]}>
            {/* title */}
            <div className={css.title}>
              {infor.title.map((item, index) => <p key={index}>{item}</p>)}
            </div>
            <div className={css['split-line']} style={splitLineStyle}/>
            {/* description */}
            <div className={css.detail}>
              {infor.subTitle.map((item, index) => <p key={index}>{item}</p>)}
            </div>
            {infor.subImage?<img className={css.subImage} src={infor.subImage}/>:null}
          </article>
          {/* img in content */}
          <img className={css.content_img + ' ' + css[infor.topDistance]} src={infor.image}/>
        </div>
        {infor.bottomLink && <a target='_blank' href={infor.url} className={css.bottomLink}>{infor.bottomLink}</a>}
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