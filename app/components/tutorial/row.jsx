import React from 'react'
import css from 'Css/tutorial'
import store from '../../store/store'
import Action from '../../action/action'
import action from '../../action/action';

class Row extends React.Component {
  constructor() {
    super()
    this.state = {
      toggle: false
    }
  }

  componentDidMount() {
    if (this.props.isSelected) this.setState({toggle: true})
  }

  render() {
    let { tutorial, isFocus, isSelected, part, line, bgColor } = this.props
    let { toggle } = this.state
    let containerHeight = tutorial.subTitle.length * 33
    let dtStyle = toggle?{height: containerHeight + 'px'}:{height:'0px'}
    let ddStyle = toggle?{top: '0px'}:{top: '-' + containerHeight + 'px'}
    let ddSelectStyle = {color: bgColor}
    return (
      <dl className={css.list}>
        <dt onClick={this.toggleList.bind(this)} className={isFocus?css.focus:''}>{tutorial.title}</dt>
        <div style={dtStyle}>
          {tutorial.subTitle.map((item, index) => (
            <dd key={item} className={isSelected && line == index?css.isSelected:''}
              style={isSelected && line==index?Object.assign({},ddStyle, ddSelectStyle):ddStyle}
              onClick={this.selectRow.bind(this, this.props.index, index)}>{item}</dd> 
          ))}
        </div>
      </dl>
    )
  }

  toggleList() {
    this.props.focus(this.props.index)
    this.setState({toggle: !this.state.toggle})
  }

  selectRow(part, line) {
    store.dispatch(action.setTutorial(part, line))
  }

}

export default Row