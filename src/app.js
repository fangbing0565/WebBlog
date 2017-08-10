/**
 * Created by lhy on 2017/7/25.
 */
let React = require('react');
let ReactDOM = require('react-dom');

let appCss = require('./assets/less/app.css');


import LoginRoute from  './components/login.js';
import HomeRoute from  './components/home.js';
import SquareRoute from  './components/square.js';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

let MainContent = React.createClass({

        render: function () {
            return (
                <Router>
                    <div>
                        <div className={appCss.routerContent}>
                            <Route exact path='/' component={LoginRoute}/>
                            <Route path='/LoginRoute' component={LoginRoute}/>
                            <Route path='/home' component={HomeRoute}/>
                            <Route path='/square' component={SquareRoute}/>
                        </div>
                    </div>
                </Router>)
        }
    });

let Basic = React.createClass({
    render: function () {
        return (
            <div>
                <MainContent />
            </div>
        )
    }

});
ReactDOM.render((
    <Basic/>
), document.getElementById('cnt'));

