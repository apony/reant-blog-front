import React, { Component } from "react";
import PropTypes from 'prop-types';
import './index.less'
import userService from '@/api/user'
import { Drawer, Input, Button, message } from 'antd';

class LoginDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: true,
      userAccount: '',
      userPassword: '',
      againPassword: '',
      inputError: {
        errorType: 0,
        msg: ''
      },
    }
  }

  render() {
    return (
      <Drawer title='登录/注册'
        closable={true}
        maskClosable={true}
        onClose={this.props.onClose}
        visible={this.props.visible}
        width={400}>
        {
          this.state.isLogin ? (this.renderLoginModule()) : (this.renderRegisterModule())
        }
      </Drawer>
    )
  }

  componentDidMount() {

  }

  renderLoginModule = () => {
    return <div className='form-container'>
      <div className={['input-wrapper', this.state.inputError.errorType === 1 ? 'error-input-wrapper' : null].join(' ')} data-msg={this.state.inputError.msg}>
        <Input placeholder='请输入登录账号'
          allowClear
          value={this.state.userAccount}
          className='input-style'
          onChange={(e) => { this.inputChange('userAccount', e.target.value) }} />
      </div>
      <div className={['input-wrapper', this.state.inputError.errorType === 2 ? 'error-input-wrapper' : null].join(' ')} data-msg={this.state.inputError.msg}>
        <Input.Password placeholder='请输入密码'
          value={this.state.userPassword}
          className='input-style'
          onChange={(e) => { this.inputChange('userPassword', e.target.value) }} />
      </div>
      <Button type='primary' className='operation-btn' onClick={this.beforeLogin}>登录</Button>
      <div className='tips'>还没有账号？<span onClick={this.switchIsLogin} className='color-active'>去注册>></span></div>
    </div>
  }

  renderRegisterModule = () => {
    return <div className='form-container'>
      <div className={['input-wrapper', this.state.inputError.errorType === 1 ? 'error-input-wrapper' : null].join(' ')} data-msg={this.state.inputError.msg}>
        <Input placeholder='请输入登录账号'
          allowClear
          value={this.state.userAccount}
          className='input-style'
          onChange={(e) => { this.inputChange('userAccount', e.target.value) }} />
      </div>
      <div className={['input-wrapper', this.state.inputError.errorType === 2 ? 'error-input-wrapper' : null].join(' ')} data-msg={this.state.inputError.msg}>
        <Input.Password placeholder='请输入密码'
          value={this.state.userPassword}
          className='input-style'
          onChange={(e) => { this.inputChange('userPassword', e.target.value) }} />
      </div>
      <div className={['input-wrapper', this.state.inputError.errorType === 3 ? 'error-input-wrapper' : null].join(' ')} data-msg={this.state.inputError.msg}>
        <Input.Password placeholder='请再次输入密码'
          value={this.state.againPassword}
          className='input-style'
          onChange={(e) => { this.inputChange('againPassword', e.target.value) }} />
      </div>
      <Button type='primary' className='operation-btn' onClick={this.beforeRegister}>注册</Button>
      <div className='tips'>已有账号，<span onClick={this.switchIsLogin} className='color-active'>去登录>></span></div>
    </div>
  }

  switchIsLogin = () => {
    this.setState({
      userAccount: '',
      userPassword: '',
      againPassword: '',
      isLogin: !this.state.isLogin
    })
    this.setErrorMsg(0, '')
  }

  inputChange = (field, value) => {
    this.setState({
      [field]: value,
    })
    this.setErrorMsg(0, '')
  }

  setErrorMsg = (errorType, msg) => {
    this.setState({
      inputError: {
        errorType: errorType,
        msg: msg
      }
    })
  }

  beforeRegister = () => {
    if (!this.state.userAccount) {
      return this.setErrorMsg(1, '账号不能为空')
    }
    if (!this.state.userPassword) {
      return this.setErrorMsg(2, '密码不能为空')
    }
    if (!this.state.userPassword) {
      return this.setErrorMsg(3, '请再一次输入密码')
    }
    if (this.state.userPassword !== this.state.againPassword) {
      return this.setErrorMsg(3, '两次输入密码不一致，请检查')
    }
    this.register()
  }

  register = () => {
    userService.register({
      account: this.state.userAccount,
      password: this.state.userPassword
    }).then(res => {
      if (res.success) {
        message.success(res.msg)
        // 返回登录界面
        this.setState({
          isLogin: true,
          userPassword: ''
        })
      } else {
        switch (res.msg) {
          case '用户名重复':
            this.setErrorMsg(1, res.msg)
            break;
          default:
            message.error(res.msg)
        }
      }
    })
  }

  beforeLogin = () => {
    if (!this.state.userAccount) {
      return this.setErrorMsg(1, '账号不能为空')
    }
    if (!this.state.userPassword) {
      return this.setErrorMsg(2, '密码不能为空')
    }
    this.login()
  }

  login = () => {
    userService.login({
      account: this.state.userAccount,
      password: this.state.userPassword
    }).then(res => {
      if (res.success) {
        message.success(res.msg)
        this.props.onLogin && this.props.onLogin(res.data)
        this.props.onClose && this.props.onClose()
      } else {
        switch (res.msg) {
          case '用户不存在':
            this.setErrorMsg(1, res.msg)
            break;
          case '密码错误':
            this.setErrorMsg(2, res.msg)
            break;
          default:
            message.error(res.msg)
        }
      }
    })
  }
}

LoginDrawer.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  onLogin: PropTypes.func,
};
LoginDrawer.defaultProps = {
  visible: false
};

export default LoginDrawer


