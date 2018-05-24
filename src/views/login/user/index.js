import { Card, Tabs, Form, Select, Input, Button } from 'antd'
import './index.scss'
const React = require('react')

class LoginUser extends React.Component {
  constructor () {
    super()
    
    this.state = {
      schoolList: ['1', '2', '3']
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (val) {
    const schoolList = this.state.schoolList
    // fetch schoolList
    this.setState({
      schoolList: this.state.schoolList.filter(_ => _.includes(val))
    })
  }

  render () {
    return (
      <Card className="loginUser">
        <Tabs className="loginUser-tab" defaultActiveKey="1">
          <Tabs.TabPane tab="实名登录" key="1">
            <Form>
              <Form.Item>
                <Select placeholder="学校" onChange={this.handleChange} combobox>
                  { this.state.schoolList.map(_ => <Select.Option key={_}>{_}</Select.Option>) }
                </Select>
              </Form.Item>
              <Form.Item>
                <Input size="large" placeholder="姓名" />
              </Form.Item>
              <Form.Item>
                <Input type="password" size="large" placeholder="密码"/>
              </Form.Item>
              <Button size="large" type="primary">登录</Button>
            </Form>
          </Tabs.TabPane>
          <Tabs.TabPane tab="快速登录" key="2">
            <Form>
              <Form.Item>
                <Input size="large" placeholder="翼课号/邮箱/手机号" />
              </Form.Item>
              <Form.Item>
                <Input type="password" size="large" placeholder="密码"/>
              </Form.Item>
            </Form>
            <Button size="large" type="primary">登录</Button>
          </Tabs.TabPane>
        </Tabs>
      </Card>
    )
  }
}

module.exports = LoginUser