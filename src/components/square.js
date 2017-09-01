/**
 * Created by fang on 2017/8/9.
 */
let React = require('react');
import './../assets/less/square.less';
// let squareCss = require('./../assets/less/square.css');
import {
    Link
} from 'react-router-dom';
import { createHistory } from 'history'
const history = createHistory();
// history.pushState(null,null,'/square');


let SquareRoute = React.createClass({
    render:function () {
        return (
            <div>
          <div className="squareContent">
              squareContent
          </div>
            </div>
        )
    }
});
// module.exports = LoginRoute;
export default SquareRoute;