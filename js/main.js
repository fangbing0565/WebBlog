/**
 * Created by lhy on 2017/7/25.
 */
let React = require('react');
let ReactDOM = require('react-dom');
import Header from  '../components/header/header.js'

let Basic = React.createClass({
    render:function () {
        return(
            <div>
                hello world!
                <Header/>
            </div>
        )
    }
});
ReactDOM.render((
    <Basic/>
), document.getElementById('cnt'));