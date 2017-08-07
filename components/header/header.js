/**
 * Created by lhy on 2017/7/25.
 */
let React = require('react');
import style from './header.css'

let Header = React.createClass({
    render:function () {
        return (                    
            <header className={style.hd}>
            这是头部先测试图片
                <img src={require("../../img/small.png")} alt=""/>
        </header>)
    }
});
module.exports = Header;