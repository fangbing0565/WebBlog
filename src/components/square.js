/**
 * Created by fang on 2017/8/9.
 */
let React = require('react');
// import style from './header.css';
let squareCss = require('./../assets/less/square.css');
import {
    Link
} from 'react-router-dom';


let SquareRoute = React.createClass({
    render:function () {
        return (
            <div>
          <div className={squareCss.squareContent}>
              squareContent
          </div>
            </div>
        )
    }
});
// module.exports = LoginRoute;
export default SquareRoute;