/**
 * Created by lhy on 2017/7/25.
 */
let React = require('react');
let ReactDOM = require('react-dom');

// let appCss = require('./assets/less/app.css');
import './assets/less/app.less';


import LoginRoute from  './components/login.js';
import HomeRoute from  './components/home.js';
import SquareRoute from  './components/square.js';
import Article from  './components/home/article.js';
import ArticleDetails from  './components/home/articleDetails.js';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';

let Basic = React.createClass({

    render: function () {
        return (
            <BrowserRouter basename="/#">
                <div>
                    <div className="routerContent">
                        <Route exact path='/' component={LoginRoute}/>
                        <Route path='/LoginRoute' component={LoginRoute}/>
                        <Route path='/home' component={HomeRoute}/>
                        <Route path='/square' component={SquareRoute}/>
                    </div>
                </div>
            </BrowserRouter>)
    }
});

ReactDOM.render((
    <Basic/>
), document.getElementById('cnt'));


