import React from 'react'
import ContentColume from './contentColume'
import css from 'Css/tutorial'

class ContentRow extends React.Component {
  constructor() {
    super()
  }

  render() {
    let { columes, position } = this.props
    let columeCount = columes.reduce((previous, current, index, arr) => previous + current.colume, 0)
    return(
      <section className={css.content_row}>
      {/* colume */}
        {columes.map((item, index) => (
          <ContentColume key={position+index} infor={item} columeCount={columeCount}/>
        ))}
      </section>
    )
  }
}

export default ContentRow