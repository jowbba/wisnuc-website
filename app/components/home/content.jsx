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
        <article className={css.content} style={{top: infor.top}}>
          <div className={css.title}>
            {infor.title.map((item, index) => <p key={index}>{item}</p>)}
          </div>
          <div className={css['split-line']}/>
          <div className={css.detail}>
            {infor.subTitle.map((item, index) => <p key={index}>{item}</p>)}
          </div>
        </article>
        <img src={infor.image} alt=""/>
      </section>
    )
  }
}

export default Content