import React from 'react'
import NavRow from './navRow'
import css from 'Css/tutorial'

class Leftnav extends React.Component {
  constructor() {
    super()
    this.state = {
      focus: 0
    }
  }

  render() {
    let { part, line } = this.props
    return (
      <div id={css.leftnav_container} style={this.props.style} className={this.props.class}>
        <div>
          {/* title */}
          <div id={css.leftnav_title}>Tutorial</div>
          {/* list */}
          <nav>
            {this.props.tutorials.map((tutorial,index) => 
              <NavRow key={index} tutorial={tutorial} index={index} part={part} line={line}
                isFocus={this.state.focus == index} isSelected={part == index} bgColor={tutorial.bgColor}
                focus={this.focus.bind(this)}
            />)}
          </nav>
        </div>
      </div>  
    )
  }

  focus(focus) {
    this.setState({focus})
  }
}

export default Leftnav