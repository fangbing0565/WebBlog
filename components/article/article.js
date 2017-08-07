/**
 * Created by fang on 2017/8/6.
 */
let React = require('react');
import style from './article.css';

let Article = React.createClass({
    render: function () {
        let Articles = [
            {ArticleId: "1", ArticleName: "文章一",ArticleContent:"1",ArticleAuthor:"a1",ArticleImg:"../../img/article1.jpg"},
            {ArticleId: "2", ArticleName: "文章二",ArticleContent:"2",ArticleAuthor:"a2",ArticleImg:"../../img/article2.jpg"}
        ];
        return (
            <div className={style.articleContent}>
                <div className={style.articleList}>
                    {
                        Articles.map(function (item) {
                            return (
                                <li  key={item.ArticleId}>
                                    <h2 className={style.articleTitle}><a href="#"> {item.ArticleName}</a> </h2>
                                    <div className={style.articleContent}>{item.ArticleContent}</div>
                                    <div className={style.articleAuthor}>{item.ArticleAuthor}</div>
                                    <img className={style.articleImg} src={require(item.ArticleImg)} alt=""/>
                                </li>
                            )})
                    }
                </div>
            </div>)
    }
});


// module.exports = Article;
export default Article;