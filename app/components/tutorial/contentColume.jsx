import React from 'react'
import css from 'Css/tutorial'

class ContentColume extends React.Component {
  constructor() {
    super()
  }

  render() {
    let { infor, columeCount } = this.props
    let grow = {flexGrow: infor.colume}
    let basis = {flexBasis: (infor.colume/columeCount)*100 + '%'}
    let style = Object.assign({}, grow, basis)
    return(
      <div className={css.content_colume} style={style}>
        {/* paragraph  */}
        {infor.type == 'text' && infor.content.map((item, index) => 
          <p key={index}>{item}</p>
        )}
        {/* image */}
        {infor.type == 'image' && <img src={infor.src} alt=""/>}
        {/* video */}
        {infor.type == 'video' && (
          <video controls>
            <source src={infor.src} type='video/mp4'/>
          </video>
        )}
      </div>
    )
  }
}

export default ContentColume