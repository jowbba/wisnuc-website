import React from 'react'
import css from 'Css/download'
import bannerImg from 'Image/tech-banner.png'
import downIconImg from 'Image/down-icon.png'


class Ws215i extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <div id={css.banner_tech} style={{backgroundImage: bannerImg}}></div>
        <div id={css.down_doc}>
          <span></span>
          <table>
            <tbody>
              <tr>
                <th>项目</th>
                <th>描述</th>
                <th>下载</th>
                <th>备注</th>
              </tr>
              <tr>
                <td rowSpan="3">WISNUC 客户端</td>
                <td>Windows 8或10</td>
                <td><a href="http://120.27.108.153/download/doc/wisnuc-win-setup-1.2.15.zip">
                  <img src={downIconImg} alt=""/>
                  下载 wisnuc-win-setup-1.2.15.zip 
                </a></td>
                <td className={css.beizhu}>2017-11-23 最后更新</td>
              </tr>
              <tr>
                <td>Mac</td>
                <td><a href="http://120.27.108.153/download/doc/wisnuc-darwin-x64-1.2.15.zip">
                  <img src={downIconImg} alt=""/>
                  下载 wisnuc-darwin-x64-1.2.15.zip 
                </a></td>
                <td>2017-11-23 最后更新</td>
              </tr>
              <tr>
                <td>Android</td>
                <td><a href="http://120.27.108.153/download/doc/wisnuc-android-1.2.37.zip">
                  <img src={downIconImg} alt=""/>
                  下载 wisnuc-android-1.2.37.zip
                </a></td>
                <td>2017-12-08 最后更新</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

module.exports = Ws215i