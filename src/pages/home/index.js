import React, { Component } from "react";
// import { BrowserRouter, Route  } from 'react-router-dom'
import './home.less'
import blogService from '@/api/blog'

class home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogList: [],
    }
  }

  componentDidMount() {
    blogService.getList().then(res => {
      if(res.success&&res.data){
        this.setState({
          blogList: res.data.items || []
        })
      }
    })
  }

  render() {
    return (
      <div>首页
        <div>
          {
            this.state.blogList.map(item => {
              return this.renderBlogRow(item)
            })
          }
        </div>
      </div>
    );
  }

  renderBlogRow(item){
    // 界面由小马哥完善
    return <div>
      <h3 onClick={this.go.bind(this,item)} style={{cursor:'pointer'}}>{item.title}</h3>
    </div>
  }

  go(item){
    blogService.getOne(item._id).then(res => {
      if(res.success&&res.data){
        console.log(res.data.item)
      }
    })
  }
}
export default home
