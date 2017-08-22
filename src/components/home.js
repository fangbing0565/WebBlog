/**
 * Created by fang on 2017/8/9.
 */

import React from 'react'
import '../assets/less/home.less'
import Article from './home/article.js'
import ArticleDetails from './home/articleDetails.js'
import Header from './home/header.js'
import {
    Route
} from 'react-router-dom'

class Home extends React.Component {

    render() {

        /*   let logOut = function () {
         // 清楚缓存   跳转到login
         }
         let articleId*/

        return (
            <div className="homeContent">
                <Header />
                <div className="footerContent">
                    <Route exact path="/home" component={Article}/>
                    <Route path="/home/article" component={Article}/>
                    <Route path={"/home/articleDetails/:id"} component={ArticleDetails}/>
                </div>
            </div>
        )
    }
}
export default new Home()

/*
 this.props对象属性和PropsType属性一一对应
 let data = 123
 let MyTitle = React.createClass({
 propTypes: {
 title: React.PropTypes.string.isRequired,
 },
 render: function() {
 return <h1> {this.props.title} </h1>
 }
 })
 ReactDOM.render(
 <MyTitle title={data} />,
 document.getElementById('example')
 )

 除了下面这个
 *this.props.children  没有 undefinded  一个 object  两个以上 array     React.Children.map  遍历子节点
 *
 *
 *
 *
 * var LikeButton = React.createClass({
 getInitialState: function() {   // 用户互动变化值用this.state
 return {liked: false}
 },
 handleClick: function(event) {
 this.setState({liked: !this.state.liked})
 },
 render: function() {
 var text = this.state.liked ? 'like' : 'haven\'t liked'
 return (
 <p onClick={this.handleClick}>
 You {text} this. Click to toggle.
 </p>
 )
 }
 })
 *
 * */

