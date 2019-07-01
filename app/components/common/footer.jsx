import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import css from 'Css/footer'

class Nav extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
        <div className={css.container}>
          <div className={css.content}>
            <div className={css['footer-top']}>
              <p></p>
                <p>公司介绍：上海钉南智能科技有限公司成立于2019年，是一家专注于个人智能存储的科技公司。</p>
                <p>钉南智能科技推出了专为“懒人”量身定做的口袋网盘，小巧、安静、不扰人。</p>
            </div>
            <div className={css['footer-bottom']}>
              <div className={css['footer-bottom-left']}>
                
              <p>联系电话：17316560021</p>
              <p>上海地址：上海市浦东新区纳贤路800号科海大楼A座3层</p>

              </div>
              <div className={css['footer-bottom-right']}>
                <a style={{marginRight: '20px'}} href='http://www.miit.gov.cn/' target='_blank'>沪ICP备19016098号</a>
                <Link target='_blank' to={'/support'}>用户协议</Link>
              </div>
              
            </div>
          </div>
        </div>
    )
  }
}

var mapStateToProps = state => {
  return {
    view: state.view
  }
}

export default connect(mapStateToProps)(Nav)