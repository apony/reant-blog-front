import React, { Component, Fragment } from "react";
import { Route, withRouter, Switch } from 'react-router-dom'
import './App.less'
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Button } from 'antd'
import home from './pages/home'
import note from './pages/note'
import saysay from './pages/saysay'
import resource from './pages/resource'
import share from './pages/share'
import code from './pages/code'

// 测试redux
import { connect } from 'react-redux';
import { increment } from '@/actions';

import LoginDrawer from '@/components/LoginDrawer'
const { Header, Content, Footer } = Layout;


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLogin: false,
      userInfo: null,
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
                <span>摸鱼之redux number： {this.props.number} </span>
                <Button type="primary" onClick={() => this.onClick()}> 点击+1</Button>
                {
                  this.state.userInfo ?
                    <span className="account">
                      {this.state.userInfo.nickname || this.state.userInfo.account}
                    </span> :
                    <span className="account nologin" onClick={this.showLoginDrawer}>
                      登录/注册
                      </span>
                }
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
        <LoginDrawer visible={this.state.showLogin} onClose={this.hideLoginDrawer} onLogin={this.onLogin} />
        <Footer style={{ textAlign: 'center' }}><p>Copyright © 2019 apony.xyz(小马哥) All Rights Reserved 粤ICP备52512138号</p><p>骄傲的使用了新一代Web开发框架<a href="https://koa.bootcss.com/" target="_blank">koa</a></p></Footer>
      </Layout>
    )
  }
  //当组件输出到 DOM 后会执行 componentDidMount()
  componentDidMount() {

  }

  // 测试redux
  onClick = () => {
    this.props.dispatch(increment())
  }

  showLoginDrawer = () => {
    this.setState({
      showLogin: true
    })
  }

  hideLoginDrawer = () => {
    this.setState({
      showLogin: false
    })
  }

  onLogin = (userInfo) => {
    this.setState({
      userInfo: userInfo
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
export default connect(
  state => ({
    number: state.number
  })
)(withRouter(App));
