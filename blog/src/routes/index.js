import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {instanceOf} from 'prop-types';
import {CookiesProvider, withCookies, Cookies} from 'react-cookie';

import LoginRoute from './../views/login';
import SquareRoute from './../views/square';
import createHashHistory from 'history/createHashHistory'
import createBrowserHistory from 'history/createBrowserHistory'
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}
class BlogRoute extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        const {cookies} = this.props;
    }

    render() {
        return (
            <Router>
                <Route path="/" component={(props) => (
                    <div {...props}>
                        <Switch>
                            <Route exact path='/' component={LoginRoute}/>
                            <Route path="login" getComponent={LoginRoute}/>//登陆
                            <Route path="square" getComponent={SquareRoute}/>//广场
                            <Redirect from='*' to='/'/>
                        </Switch>
                    </div>
                )}/>
            </Router>)
    }
}
export default BlogRoute;
