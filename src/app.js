/**
 * Created by lhy on 2017/7/25.
 */
let React = require('react');
let ReactDOM = require('react-dom');
import {instanceOf} from 'prop-types';

import {CookiesProvider, withCookies, Cookies} from 'react-cookie';
// let appCss = require('./assets/less/app.css');
import './assets/less/app.less';


import LoginRoute from  './components/login.js';
import HomeRoute from  './components/home.js';
import SquareRoute from  './components/square.js';
import Article from  './components/home/article.js';
import ArticleDetails from  './components/home/articleDetails.js';
import {
    browserHistory, Router,
    Route,
    Link
} from 'react-router-dom';
import {createHistory} from 'history'
const history = createHistory();
history.push('/');

class Basic extends React.Component {
/*    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };*/

/*    constructor(props) {
        super(props);
        const {cookies} = this.props;

    }*/

    render() {
        return (
            <Router history={history} basename="">
                <div className="routerContent">
                    <Route exact path='/' component={LoginRoute}/>
                    <Route path='/LoginRoute' component={LoginRoute}/>
                    <Route path='/home' component={HomeRoute}/>
                    <Route path='/square' component={SquareRoute}/>
                </div>
            </Router >)
    }
}

ReactDOM.render((
    <CookiesProvider>
        <Basic/>
    </CookiesProvider>
), document.getElementById('cnt'));


