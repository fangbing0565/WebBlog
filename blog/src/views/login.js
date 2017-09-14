/**
 * Created by fang on 2017/8/8.
 */
import React from 'react';
import './../assets/less/login.less';
import {instanceOf} from 'prop-types';

import {CookiesProvider, withCookies, Cookies} from 'react-cookie';
import {
    Link
} from 'react-router-dom';
// import {createHistory} from 'history'
// const history = createHistory();
// history.pushState(null,null,'/login');

class LoginRoute extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        const {cookies} = this.props;
        this.state = {
            userName:  '',
            userPwd: ''
            // userPwd: cookies.get('userPwd') ? cookies.get('userPwd') : ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(name, event) {
        // console.log(name,event);
        if (name == 'userName') {
            this.setState({userName: event.target.value});
        } else {
            this.setState({userPwd: event.target.value});
        }
    }

    handleSubmit(event) {
        const {cookies} = this.props;
        event.preventDefault();
        //登陆
        //成功之后保存cookie
        cookies.set('userName', this.state.userName, {maxAge: 1000 * 60 * 24 * 15});
        cookies.set('userPwd', this.state.userPwd, {maxAge: 1000 * 60 * 24 * 15});
        //跳转个人主页
        window.open("/#/home/", '_self');
    }

    render() {
        return (
            <div>
                <form className="loginContent" onSubmit={this.handleSubmit}>
                    <div className="indexHeader">

                        <h1 className="indexLogo"></h1>

                        <h2 className="indexSubTitle">与世界分享你的知识、经验和见解</h2>
                    </div>
                    <div>
                        <label  >userName<input value={this.state.userName} type="text"
                                                onChange={this.handleChange.bind(this, 'userName')}/></label>
                    </div>
                    <div>
                        <label  >userPwd<input type="password" value={this.state.userPwd}
                                               onChange={this.handleChange.bind(this, 'userPwd')}/></label>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
                <footer className="footer">
                    <span>© 2017 启程</span>
                    <span className="dot">·</span>
                    <Link target="_blank" to='/square'>启程专栏</Link>
                    <span className="dot">·</span>
                    <Link to='/square'>广场</Link>
                    <span className="dot">·</span>
                    <Link target="_blank" to='/square'>移动应用</Link>
                    <span className="dot">·</span>
                    <span className="dot">·</span>
                    <Link target="_blank" to='/square'>联系我们</Link>
                    <span className="dot">·</span>
                    <Link target="_blank" to='/square'>来启程工作</Link>
                    <span className="dot">·</span>
                    <Link to='/home'>个人中心</Link>
                </footer>
                {this.props.children}
            </div>
        )
    }
}


export default LoginRoute;