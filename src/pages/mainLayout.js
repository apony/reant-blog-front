
import React, { Component, Fragment } from "react";
// import { Route, Redirect }    from 'react-router-dom'
import './main.less'
import { getBlogList } from '@/api/blog'
import userService from '@/api/user'
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Drawer, Input, Button} from 'antd';
import LoginDrawer from '@/component/LoginDrawer'
const { Header, Content, Footer } = Layout;

class MainLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLogin: false,
      userInfo: null,
    }
  }

  render() {
    return (
      // <Fragment>
      //   <div className="views">
      //     <span>test router</span>
      //     {/* <div className="views-container">
      //       <Route path="/views" render={()=> <Redirect replace to='/views/home' />}></Route>
      //       <Route path="/views/home" component={require('./page/Home').default}></Route>
      //       <Route path="/views/category" component={require('./page/Category').default}></Route>
      //       <Route path="/views/fn" component={require('./page/Fn').default}></Route>
      //       <Route path="/views/cart" component={require('./page/Cart').default}></Route>
      //       <Route path="/views/me" component={require('./page/Me').default}></Route>
      //     </div>

      //     <footer className="footerFixed">
      //       <button id={'home'} onClick={this.tabbClick}>首页</button>
      //       <button id={'category'} onClick={this.tabbClick}>分类</button>
      //       <button id={'fn'} onClick={this.tabbClick}>fn</button>
      //       <button id={'cart'} onClick={this.tabbClick}>购物车</button>
      //       <button id={'me'} onClick={this.tabbClick}>我的</button>
      //     </footer> */}
      //   </div>
      // </Fragment>
      // <Layout>
      //     <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      //       <div className="logo" />
      //       <Menu
      //         theme="dark"
      //         mode="horizontal"
      //         defaultSelectedKeys={['2']}
      //         style={{ lineHeight: '64px' }}
      //       >
      //         <Menu.Item key="1">nav 1</Menu.Item>
      //         <Menu.Item key="2">nav 2</Menu.Item>
      //         <Menu.Item key="3">nav 3</Menu.Item>
      //       </Menu>
      //     </Header>
      //     <Content style={{ padding: '0 50px', marginTop: 64 }}>
      //       <Breadcrumb style={{ margin: '16px 0' }}>
      //         <Breadcrumb.Item>Home</Breadcrumb.Item>
      //         <Breadcrumb.Item>List</Breadcrumb.Item>
      //         <Breadcrumb.Item>App</Breadcrumb.Item>
      //       </Breadcrumb>
      //       <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
      //     </Content>
      //     <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      // </Layout>
      <Layout style={{ backgroundImage: 'url(' + require('../assets/images/bg.gif') + ')' }}>
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
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '62px' }}
              >
                <Menu.Item key="1">
                  <Icon type="home" theme="filled" />
                  首页
                    </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="read" theme="filled" />
                  札记
                    </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="edit" />
                  一席话
                    </Menu.Item>
                <Menu.Item key="4">
                  <Icon type="usb" theme="filled" />
                  资源
                    </Menu.Item>
                <Menu.Item key="5">
                  <Icon type="share-alt" />
                  网站分享
                    </Menu.Item>
                <Menu.Item key="6">
                  <Icon type="code" theme="filled" />
                  代码
                    </Menu.Item>
                <Menu.Item key="7" className="account" onClick={this.showLoginDrawer}>
                  登录/注册
                    </Menu.Item>
              </Menu>
              <div className="toggleNavBar">
                <Icon type="menu" />
              </div>
            </Col>
          </Header>
          <LoginDrawer visible={this.state.showLogin} onClose={this.hideLoginDrawer} onLogin={this.onLogin}/>


          <Col className="gutter-row" sm={{ span: 22, offset: 1 }} xl={{ span: 18, offset: 3 }}>
            <Content className="xsPadding">
              <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
              </Breadcrumb>
              <div className="ant-content">{this.state.userInfo?(`Hello,${this.state.userInfo.nickname||this.state.userInfo.account}`):'Content'}</div>
            </Content>
          </Col>
        </Row>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
  }
  //当组件输出到 DOM 后会执行 componentDidMount()
  componentDidMount() {
    const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
    // getBlogList(1, 10)
    //   .then(function (response) {
    //     console.log(response)
    //     // _this.setState({
    //     //   users:response.data,
    //     //   isLoaded:true
    //     // });
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     _this.setState({
    //       isLoaded: false,
    //       error: error
    //     })
    //   })
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

  tabbClick = (e) => {
    e.preventDefault()
    switch (e.target.id) {
      case 'home':
        this.props.history.push({
          pathname: '/views/home'
        });
        break;
      case 'category':
        this.props.history.push({
          pathname: '/views/category'
        });
        break;
      case 'fn':
        this.props.history.push({
          pathname: '/views/fn'
        });
        break;
      case 'cart':
        this.props.history.push({
          pathname: '/views/cart'
        });
        break;
      case 'me':
        this.props.history.push({
          pathname: '/views/me'
        });
        break;
      default: {
        this.props.history.push({
          pathname: '/views/home'
        })
      }
    }
  }
}

export default MainLayout
