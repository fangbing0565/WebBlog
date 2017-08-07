/**
 * Created by fang on 2017/8/6.
 */
let React = require('react');
import style from './article.css';

let Article = React.createClass({
    render:function () {
        return (
            <div className={style.articleContent} >
                <div className={style.blogIcon}>
                    文章
                </div>
            </div>)
    }
});
module.exports = Article;