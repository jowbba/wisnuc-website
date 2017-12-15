import React from 'react'
import css from 'Css/home'
class Home extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div id={css.wrap}>home</div>
    )
  }
}

module.exports = Home