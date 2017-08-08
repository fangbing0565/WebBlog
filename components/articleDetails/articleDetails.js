/**
 * Created by fang on 2017/8/8.
 */
let React = require('react');
// import style from './header.css';
let articleDetailsCss = require('./articleDetails.css');

let ArticleDetails = React.createClass({
    render:function () {
        return (
        <div className={articleDetailsCss.detailsContent}>
            详情
        </div>
        )
    }
});
// module.exports = Header;
export default ArticleDetails;