/**
 * Created by lhy on 2017/7/25.
 */
let React = require('react');
import style from './header.css';

let Header = React.createClass({
    render:function () {
        return (
            <header className={style.hd} >
   <div className={style.blogIcon}>
       <section className={style.userMes}>
           <img src={require("../../img/fang_head.jpg")} />
               <a href="localhost">
                   <hgroup>
                       <h1>方兵的博客</h1>
                       <h2>Fang's Blog</h2>
                   </hgroup>
               </a>
       </section>

   </div>


        </header>)
    }
});
// module.exports = Header;
export default Header;