import React, { Component,Fragment } from "react";
import { Route, withRouter,Switch  } from 'react-router-dom'
import './App.less'
import userService from '@/api/user'
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Drawer, Input, Button } from 'antd'
import home from './pages/home'
import note from './pages/note'
import saysay from './pages/saysay'
import resource from './pages/resource'
import share from './pages/share'
import code from './pages/code'
const { Header, Content, Footer } = Layout;


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLogin: false,
      userAccount: '',
      userPassword: '',
    }
  }

  render() {
    return (
      <Layout style={{ backgroundImage: 'url(' + require('@/assets/images/bg.gif') + ')' }}>
        <Row>

          <Header className="xsPadding">
            <Col className="gutter-row" sm={{ span: 22, offset: 1 }} xl={{ span: 18, offset: 3 }}>

              <div className="logo">
                <span />
              </div>
              <Menu
                className="navBar"
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['home']}
                style={{ lineHeight: '62px' }}
              >
                <Menu.Item key="home" onClick={this.tabbClick}>
                  <Icon type="home" theme="filled" />
                  首页
                    </Menu.Item>
                <Menu.Item key="note" onClick={this.tabbClick}>
                  <Icon type="read" theme="filled" />
                  札记
                    </Menu.Item>
                <Menu.Item key="saysay" onClick={this.tabbClick}>
                  <Icon type="edit" />
                  一席话
                    </Menu.Item>
                <Menu.Item key="resource" onClick={this.tabbClick}>
                  <Icon type="usb" theme="filled" />
                  资源
                    </Menu.Item>
                <Menu.Item key="share" onClick={this.tabbClick}>
                  <Icon type="share-alt" />
                  网站分享
                    </Menu.Item>
                <Menu.Item key="code" onClick={this.tabbClick}>
                  <Icon type="code" theme="filled" />
                  代码
                    </Menu.Item>
                <Menu.Item key="7" className="account" onClick={this.switchLoginDrawer}>
                  登录/注册
                    </Menu.Item>
              </Menu>
              <div className="toggleNavBar">
                <Icon type="menu" />
              </div>
            </Col>
          </Header>


          <Col className="gutter-row" sm={{ span: 22, offset: 1 }} xl={{ span: 18, offset: 3 }}>
            <Content className="xsPadding">
              <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
              </Breadcrumb>
              <div className="ant-content">
              <Fragment>
                <Switch>
                    <Route exact path="/" component={home}></Route>
                    <Route path="/note" component={note}></Route>
                    <Route path="/saysay" component={saysay}></Route>
                    <Route path="/resource" component={resource}></Route>
                    <Route path="/share" component={share}></Route>
                    <Route path="/code" component={code}></Route>
                </Switch>
                </Fragment>
              </div>
            </Content>
          </Col>
        </Row>

        <Drawer title='登录/注册'
          closable={true}
          maskClosable={true}
          onClose={this.switchLoginDrawer}
          visible={this.state.showLogin}>
          <Input placeholder='请输入登录账号'
            value={this.state.userAccount}
            onChange={(e) => { this.setState({ userAccount: e.target.value }) }} />
          <Input placeholder='请输入密码'
            type='password'
            style={{ marginTop: '30px' }}
            value={this.state.userPassword}
            onChange={(e) => { this.setState({ userPassword: e.target.value }) }} />
          <Button type='primary' style={{ marginTop: '30px' }} onClick={this.login}>登录</Button>
        </Drawer>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
  }
  //当组件输出到 DOM 后会执行 componentDidMount()
  componentDidMount() {

  }

  switchLoginDrawer = () => {
    this.setState({
      showLogin: !this.state.showLogin
    })
  }

  login = () => {
    userService.login({
      account: this.state.userAccount,
      password: this.state.userPassword
    }).then(res => {
      if (res.success) {
        console.log(res.data)
      } else {
        console.log(res.msg)
      }
    })
  }

  tabbClick = (menu) => {
    switch (menu.key) {
      case 'home':
        this.props.history.push({
          pathname: '/'
        });
        break;
      case 'note':
        this.props.history.push({
          pathname: '/note'
        });
        break;
      case 'saysay':
        this.props.history.push({
          pathname: '/saysay'
        });
        break;
      case 'resource':
        this.props.history.push({
          pathname: '/resource'
        });
        break;
      case 'share':
        this.props.history.push({
          pathname: '/share'
        });
        break;
      case 'code':
        this.props.history.push({
          pathname: '/code'
        });
        break;
      default: {
        this.props.history.push({
          pathname: '/'
        })
      }
    }
  }
}

export default withRouter(App)
