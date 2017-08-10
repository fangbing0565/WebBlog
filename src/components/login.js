/**
 * Created by fang on 2017/8/8.
 */
let React = require('react');
// import style from './header.css';
let loginCss = require('./../assets/less/login.css');
import {
    Link
} from 'react-router-dom';


let LoginRoute = React.createClass({
    render: function () {
        return (
            <div>
                <div className={loginCss.loginContent}>
                    <div className={loginCss.indexHeader}>

                        <h1 className={loginCss.indexLogo}></h1>

                        <h2 className={loginCss.indexSubTitle}>与世界分享你的知识、经验和见解</h2>
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
                <footer className={loginCss.footer}>
                    <span>© 2017 博启</span>
                    <span className={loginCss.dot}>·</span>
                    <Link target="_blank" to='/square' >博启专栏</Link>
                    <span className={loginCss.dot}>·</span>
                    <Link  to='/square' >广场</Link>
                    <span className={loginCss.dot}>·</span>
                    <Link target="_blank" to='/square' >移动应用</Link>
                    <span className={loginCss.dot}>·</span>
                    <span className={loginCss.dot}>·</span>
                    <Link target="_blank" to='/square' >联系我们</Link>
                    <span className={loginCss.dot}>·</span>
                    <Link target="_blank" to='/square' >来博启工作</Link>
                    <span className={loginCss.dot}>·</span>
                    <Link  to='/home' >个人中心</Link>
                </footer>
            </div>
        )
    }
});
export default LoginRoute;