import React from 'react'
import ContentRow from './contentRow'
import css from 'Css/tutorial'

class Content extends React.Component {
  constructor() {
    super()
  }

  render() {
    let { infor, index } = this.props
    let colorStyle = {color: infor.color}

    return(
      <div id={'anchor'+ index}>
        <h2 className={css.article_title} style={colorStyle}>{infor.articleTitle}</h2>
        {infor.parts.map((item, index) => (
          <ContentRow key={index} index={index} columes={item}/>
        ))}
      </div>
    )
  }
}

export default Content