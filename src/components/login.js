/**
 * Created by fang on 2017/8/8.
 */
let React = require('react');
import './../assets/less/login.less';
// let loginCss = require('./../assets/less/login.css');
import {
    Link
} from 'react-router-dom';


let LoginRoute = React.createClass({
    render: function () {
        return (
            <div>
                <div className="loginContent">
                    <div className="indexHeader">

                        <h1 className="indexLogo"></h1>

                        <h2 className="indexSubTitle">与世界分享你的知识、经验和见解</h2>
                    </div>
                    <div>
                        <label  >userName<input type="text"/></label>
                    </div>
                    <div>
                        <label  >userPwd<input type="text"/></label>
                    </div>
                    <div>
                        <a >登陆</a>
                    </div>
                </div>
                <footer className="footer">
                    <span>© 2017 启程</span>
                    <span className="dot">·</span>
                    <Link target="_blank" to='/square' >启程专栏</Link>
                    <span className="dot">·</span>
                    <Link  to='/square' >广场</Link>
                    <span className="dot">·</span>
                    <Link target="_blank" to='/square' >移动应用</Link>
                    <span className="dot">·</span>
                    <span className="dot">·</span>
                    <Link target="_blank" to='/square' >联系我们</Link>
                    <span className="dot">·</span>
                    <Link target="_blank" to='/square' >来启程工作</Link>
                    <span className="dot">·</span>
                    <Link  to='/home' >个人中心</Link>
                </footer>
                {this.props.children}
            </div>
        )
    }
});
export default LoginRoute;