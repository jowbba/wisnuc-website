import React from 'react'
import { connect } from 'react-redux'
import css from 'Css/home'
class Home extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    
  }

  render() {
    return (
      <div id={css.wrap}>home {this.props.view.width + ' ' +  this.props.view.height }</div>
    )
  }
}

var mapStateToProps = state => {
  return {
    view: state.view
  }
}

export default connect(mapStateToProps)(Home)