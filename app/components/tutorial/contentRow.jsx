import React from 'react'
import ContentColume from './contentColume'
import css from 'Css/tutorial'

class ContentRow extends React.Component {
  constructor() {
    super()
  }

  render() {
    let { infor } = this.props
    return(
      <div className={css.content_row}>
        {infor.map((item, index) => (
          <ContentColume key={index} infor={item} />
        ))}
      </div>
    )
  }
}

export default ContentRow