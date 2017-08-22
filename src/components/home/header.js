/**
 * Created by fang on 2017/8/21.
 */
let React = require('react');
let ReactDOM = require('react-dom');

// let headerCss = require('../assets/less/home/header.css');
import './../../assets/less/home/header.less';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Fade,
    Link
} from 'react-router-dom';


let Header = React.createClass({

    render: function () {

        let logOut = function () {
            window.open("/#/" ,'_self');
            // 清楚缓存   跳转到login
        };
        return (
            <header className="hd">
                <div className="blogIcon">
                    <section className="userMes">
                        <img className="userIcon" src={require("../../assets/img/fang_head.jpg")}/>
                        <a >
                            <hgroup>
                                <h1 name="fangBing">方兵的博客</h1>
                                <h2>Fang's Blog</h2>
                                <div onClick={logOut.bind()}>
                                    退出
                                </div>
                            </hgroup>
                        </a>
                    </section>
                    <ul>
                        <li><Link to="/home/article">Article</Link></li>
                        <li><Link to="/home/articleDetails/1">articleDetails</Link></li>
                    </ul>
                </div>
            </header>

        )}});
export default Header;

