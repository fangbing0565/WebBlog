/**
 * Created by fang on 2017/8/8.
 */
import React from 'react'
import '../assets/less/login.less'
import {instanceOf} from 'prop-types'

import {Cookies} from 'react-cookie'
import {
    Link
} from 'react-router-dom'
/*
 const getVisibleTodos = (todos, filter) => {
 switch (filter) {
 case 'SHOW_ALL':
 return todos
 case 'SHOW_COMPLETED':
 return todos.filter(t => t.completed)
 case 'SHOW_ACTIVE':
 return todos.filter(t => !t.completed)
 default:
 throw new Error('Unknown filter: ' + filter)
 }
 }

 // 代表容器组件  props对象   如果容器组件的参数发生变化，也会引发 UI 组件重新渲染
 const mapStateToProps = (state, ownProps) => {
 return {
 active: ownProps.filter === state.visibilityFilter,
 todos: getVisibleTodos(state.todos, state.visibilityFilter)
 }
 }

 // todo mapDispatchToProps  用来建立 UI 组件的参数到store.dispatch方法的映射。也就是说，
 // todo 它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象
 const mapDispatchToProps = (dispatch,
 ownProps) => {
 return {
 onClick: () => {
 dispatch({
 type: 'SET_VISIBILITY_FILTER',
 filter: ownProps.filter
 })
 }
 }
 }
 // todo  对象的写法
 /!*  const mapDispatchToProps = {
 onClick: (filter) => ({
 type: 'SET_VISIBILITY_FILTER',
 filter: filter
 })
 }  *!/

 const VisibleTodoList = connect(
 mapStateToProps, // 输入逻辑
 mapDispatchToProps  //输出逻辑
 )(TodoList)*/

class LoginRoute extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    }


    constructor(props) {
        super(props)
        const {cookies} = this.props.cookies
        this.state = {
            userName: cookies.get('userName') || '',
            userPwd: cookies.get('userPwd') || ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(name, event) {
        // console.log(name,event)
        if (name == 'userName') {
            this.setState({userName: event.target.value})
        } else {
            this.setState({userPwd: event.target.value})
        }
    }

    handleSubmit(event) {
        const {cookies} = this.props
        event.preventDefault()
        //  登陆
        /*     let data = {
         name: this.state.userName,
         pwd: this.state.userPwd
         }*/
        // let onSuccess = function () {
        //  成功之后保存cookie
        cookies.set('userName', this.state.userName, {maxAge: 1000 * 60 * 24 * 15})
        cookies.set('userPwd', this.state.userPwd, {maxAge: 1000 * 60 * 24 * 15})
        //  跳转个人主页
        window.open('/#/home/', '_self')
        // }
        // apiService.logIn(data, onSuccess)
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
                        <label>userName<input value={this.state.userName} type="text"
                                              onChange={this.handleChange.bind(this, 'userName')}/></label>
                    </div>
                    <div>
                        <label>userPwd<input type="password" value={this.state.userPwd}
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
// withCookies
export default new LoginRoute()
