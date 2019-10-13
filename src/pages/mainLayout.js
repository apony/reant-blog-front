import React, { Component, Fragment } from "react";
// import { Route, Redirect }    from 'react-router-dom'
import {getBlogList} from '@/api/blog'

class MainLayout extends Component {
  constructor ( props ) {
    super(props)
    this.state = {}
  }
  
  render () {
    return (
      <Fragment>
        <div className="views">
          <span>test router</span>
          {/* <div className="views-container">
            <Route path="/views" render={()=> <Redirect replace to='/views/home' />}></Route>
            <Route path="/views/home" component={require('./page/Home').default}></Route>
            <Route path="/views/category" component={require('./page/Category').default}></Route>
            <Route path="/views/fn" component={require('./page/Fn').default}></Route>
            <Route path="/views/cart" component={require('./page/Cart').default}></Route>
            <Route path="/views/me" component={require('./page/Me').default}></Route>
          </div>
          
          <footer className="footerFixed">
            <button id={'home'} onClick={this.tabbClick}>首页</button>
            <button id={'category'} onClick={this.tabbClick}>分类</button>
            <button id={'fn'} onClick={this.tabbClick}>fn</button>
            <button id={'cart'} onClick={this.tabbClick}>购物车</button>
            <button id={'me'} onClick={this.tabbClick}>我的</button>
          </footer> */}
        </div>
      </Fragment>
    )
  }
  //当组件输出到 DOM 后会执行 componentDidMount()
componentDidMount(){
  const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
  getBlogList(1,10)
  .then(function (response) {
    console.log(response)
    // _this.setState({
    //   users:response.data,
    //   isLoaded:true
    // });
  })
  .catch(function (error) {
    console.log(error);
    _this.setState({
      isLoaded:false,
      error:error
    })
  })
}
  
  tabbClick = ( e ) => {
    e.preventDefault()
    switch ( e.target.id ) {
      case 'home' :
        this.props.history.push({
          pathname: '/views/home'
        });
        break;
      case 'category' :
        this.props.history.push({
          pathname: '/views/category'
        });
        break;
			case 'fn' :
				this.props.history.push({
					pathname: '/views/fn'
				});
				break;
			case 'cart' :
				this.props.history.push({
					pathname: '/views/cart'
				});
				break;
			case 'me' :
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