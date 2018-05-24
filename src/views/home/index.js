import { Menu, Card } from 'antd'
const React = require('react')
require('react-dom')
var EkIcon = require('@/components/EkIcon')
require('./index.scss')

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      current: 1,
      user: {
        name: ''
      }
    }

    this.bind('handleClick')
    this.bind('asyncData')
  }

  bind (fn) {
    this[fn] = this[fn].bind(this)
  }
  handleClick () {
  }
  asyncData () {
    this.setState({
      user: { name: '翼小小' }
    })
  }

  componentDidMount () {
    this.asyncData()
  }

  render() {
    return (
      <section class="home view overhidden">
        <header class="home-head view-head shadow-border">
          <span class="home-head-icon">
            <img />翼赛英语竞赛平台
          </span>
          <Menu className="home-head-menu"
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal">
            <Menu.Item key="app">
              <EkIcon type="mobile" />手机端下载
            </Menu.Item>
            <Menu.SubMenu title={<span><EkIcon type="user" />{this.state.user.name}</span>}>
              <Menu.Item key="setting:1">个人信息</Menu.Item>
              <Menu.Item key="setting:2">账号设置</Menu.Item>
              <Menu.Item key="setting:3">购买记录</Menu.Item>
              <Menu.Item key="setting:4">退出登录</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </header>
        <main class="home-main view-main">
          {this.props.children}
        </main>
      </section>
    )
  }
}

module.exports = Home