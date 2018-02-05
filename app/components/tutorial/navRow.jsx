import React from 'react'
import css from 'Css/tutorial'
import store from '../../store/store'
import Action from '../../action/action'
import action from '../../action/action';

class NavRow extends React.Component {
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
    let dtStyle = {}
    let ddContStyle = toggle?{height: containerHeight + 'px'}:{height:'0px'}
    let ddStyle = toggle?{top: '0px'}:{top: '-' + containerHeight + 'px'}
    let ddSelectStyle = {color: bgColor}

    // 二级菜单暂时不用 ，隐藏主title ，每个二级菜单只有一个元素 且作为以及菜单列表
    // 下面隐藏一级菜单 
    dtStyle = Object.assign(dtStyle, {display: 'none'})
    ddContStyle = Object.assign(ddContStyle, {height: containerHeight + 'px'})
    ddStyle = Object.assign(ddStyle, {padding:'15px 10px 15px 26px', top: '0px'})
    return (
      <dl className={css.list}>
        <dt style={dtStyle} onClick={this.toggleList.bind(this)} className={isFocus?css.focus:''}>{tutorial.title}</dt>
        <div style={ddContStyle}>
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
    store.dispatch(Action.closeMenu())
    store.dispatch(action.setTutorial(part, line))
  }

}

export default NavRow