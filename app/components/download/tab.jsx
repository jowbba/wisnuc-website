import React from 'react'
import css from 'Css/download2'

class Tab extends React.Component {
  constructor() {
    super()
  }
  
  render() {
    let { icon, title, version, updateTime, url, versionColor} = this.props.infor
    return (
      <div className={css.tab}>
        <img src={icon} alt=""/>
        <p className={css.tab_title}>{title}</p>
        <p className={css.version} style={{color: versionColor}}>{version}</p>
        <p className={css.update_time}>{updateTime}</p>
        <a href={url} className={css.download_btn}>下载</a>
      </div>
    )
  }
}

export default Tab