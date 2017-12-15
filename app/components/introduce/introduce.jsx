import React from 'react'
// css 模块化 同类名 不影响
import css from 'Css/one'
class Introduce extends React.Component {
  constructor() {
    super()
    this.state = {number: 'one'}
	}
	
	render() {
		return (
			<div>
				<h2 id={css.title}>this is test component {this.state.number}</h2>
			</div>
		)
	}
}

export default Introduce