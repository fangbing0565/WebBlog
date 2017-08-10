/**
 * Created by lhy on 2017/7/25.
 */
let React = require('react');
let ReactDOM = require('react-dom');

let headerCss = require('./assets/less/header.css');

// import Header from  '../components/header/header.js';

import Article from  './components/article.js';
import ArticleDetails from  './components/articleDetails.js';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

let MainContent = React.createClass({

        render: function () {

            let logOut = function () {

            };
            return (
                <Router>
                    <div>
                        <header className={headerCss.hd}>
                            <div className={headerCss.blogIcon}>
                                <section className={headerCss.userMes}>
                                    <img className={headerCss.userIcon} src={require("./assets/img/fang_head.jpg")}/>
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
                                    <li><Link to="./article">Article</Link></li>
                                    <li><Link to="./articleDetails">articleDetails</Link></li>
                                </ul>
                            </div>
                        </header>
                        <div className={headerCss.routerContent}>
                            <Route exact path='/' component={Article}/>
                            <Route path='/article' component={Article}/>
                            <Route path='/articleDetails' component={ArticleDetails}/>
                        </div>
                    </div>
                </Router>)
        }
    });

let Basic = React.createClass({
    render: function () {
        return (
            <div>
                {/*<Header/>*/}
                <MainContent />
            </div>
        )
    }

});
ReactDOM.render((
    <Basic/>
), document.getElementById('cnt'));


/*
 this.props对象属性和PropsType属性一一对应
 let data = 123;
 let MyTitle = React.createClass({
 propTypes: {
 title: React.PropTypes.string.isRequired,
 },
 render: function() {
 return <h1> {this.props.title} </h1>;
 }
 });
 ReactDOM.render(
 <MyTitle title={data} />,
 document.getElementById('example')
 );

 除了下面这个
 *this.props.children  没有 undefinded  一个 object  两个以上 array     React.Children.map  遍历子节点
 *
 *
 *
 *
 * var LikeButton = React.createClass({
 getInitialState: function() {   //用户互动变化值用this.state
 return {liked: false};
 },
 handleClick: function(event) {
 this.setState({liked: !this.state.liked});
 },
 render: function() {
 var text = this.state.liked ? 'like' : 'haven\'t liked';
 return (
 <p onClick={this.handleClick}>
 You {text} this. Click to toggle.
 </p>
 );
 }
 });
 *
 * */

