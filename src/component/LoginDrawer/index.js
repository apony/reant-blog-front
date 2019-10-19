import React, { Component} from "react";
import PropTypes from 'prop-types';
import './index.less'
import userService from '@/api/user'
import {Drawer, Input, Button} from 'antd';

class LoginDrawer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: true,
            userAccount: '',
            userPassword: '',
            loginMsg: {
                accountMsg: '',
                passwordMsg: ''
            }
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
                    this.state.isLogin?(this.renderLoginModule()):(this.renderRegisterModule())
                }
            </Drawer>
        )
    }

    componentDidMount() {

    }

    renderLoginModule = () => {
        return <div className='form-container'>
            <div className='input-wrapper' data-msg={this.state.userAccount}>
                <Input placeholder='请输入登录账号'
                       allowClear
                       value={this.state.userAccount}
                       className='input-style'
                       onChange={(e)=>{this.setState({userAccount:e.target.value})}}/>
            </div>
            <div className='input-wrapper' data-msg={this.state.userPassword}>
                <Input placeholder='请输入密码'
                       allowClear
                       type='password'
                       value={this.state.userPassword}
                       className='input-style'
                       onChange={(e)=>{this.setState({userPassword:e.target.value})}}/>
            </div>
            <Button type='primary' className='operation-btn' onClick={this.login}>登录</Button>
            <div className='tips'>还没有账号？<span onClick={this.switchIsLogin} className='color-active'>去注册>></span></div>
        </div>
    }

    renderRegisterModule = () => {
        return <div className='form-container'>
            <div className='tips'>已有账号，<span onClick={this.switchIsLogin} className='color-active'>去登录>></span></div>
        </div>
    }

    switchIsLogin = () => {
        this.setState({
            isLogin: !this.state.isLogin
        })
    }

    login = () => {
        userService.login({
            account: this.state.userAccount,
            password: this.state.userPassword
        }).then(res => {
            if(res.success){
                console.log(res.data)
                this.props.onLogin&&this.props.onLogin(res.data)
                this.props.onClose&&this.props.onClose()
            }else{
                console.log(res.msg)
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


