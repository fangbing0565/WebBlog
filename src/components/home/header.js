/**
 * Created by fang on 2017/8/21.
 */
import React from'react'
import '../../assets/less/home/header.less'

import {
    Link
} from 'react-router-dom'


class Header extends React.Component {

    render() {

        let logOut = function () {
            window.open('/#/', '_self')
            // 清楚缓存   跳转到login
        }
        return (
            <header className="hd">
                <div className="blogIcon">
                    <section className="userMes">
                        <img className="userIcon" src={require('../../assets/img/fang_head.jpg')}/>
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

        )
    }
}

export default new Header()

