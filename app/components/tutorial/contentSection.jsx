import React from 'react'
import ContentRow from './contentRow'
import css from 'Css/tutorial'

class ContentSection extends React.Component {
  constructor() {
    super()
  }

  render() {
    let { infor, index, position } = this.props
    let arTitle = infor.articleTitle
    let colorStyle = {color: infor.color}
    return(
      <div id={'anchor'+ index}>
        {/* section name */}
        {false && <h2 className={css.article_title} style={colorStyle}>{arTitle}</h2>}
        {/* row */}
        {infor.parts.map((item, rowNumber) => (
          <ContentRow key={position + index} index={index} columes={item} position={position + index}/>
        ))}
      </div>
    )
  }
}

export default ContentSection