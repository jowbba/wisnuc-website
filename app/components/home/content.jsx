import React from 'react'
import css from 'Css/home'

class Content extends React.Component {
  constructor() {
    super()
  }

  render() {
    let infor = this.props.infor
    let { backgroundColor, color } = this.props.infor
    let containerStyle = { backgroundColor, color }
    return (
      <section className={css.container} style={containerStyle}>
        <div>
          <article className={css.content_text} style={{top: infor.top}}>
            <div className={css.title}>
              {infor.title.map((item, index) => <p key={index}>{item}</p>)}
            </div>
            <div className={css['split-line']}/>
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

export default Content