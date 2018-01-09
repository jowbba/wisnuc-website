import React from 'react'
import ContentRow from './contentRow'
import css from 'Css/tutorial'

class Content extends React.Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.props.infor)
    let { infor, index } = this.props
    return(
      <div id={'anchor'+ index}>
        {infor.parts.map((item, index) => (
          <ContentRow key={index} index={index} infor={item}/>
        ))}
      </div>
    )
  }
}

export default Content