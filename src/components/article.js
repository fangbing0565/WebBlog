/**
 * Created by fang on 2017/8/6.
 */
let React = require('react');
// import style from './article.css';
let articleCss = require('../assets/less/article.css');

let Article = React.createClass({

    render: function () {
        let Articles = [
            {
                ArticleId: "1",
                ArticleName: "文章一",
                ArticleContent: "1",
                ArticleAuthor: "a1",
                ArticleImg: require("../assets/img/article1.jpg")
            },
            {
                ArticleId: "2",
                ArticleName: "文章二",
                ArticleContent: "2",
                ArticleAuthor: "a2",
                ArticleImg: require("../assets/img/article2.jpg")
            },
            {
                ArticleId: "3",
                ArticleName: "文章二",
                ArticleContent: "2",
                ArticleAuthor: "a2",
                ArticleImg: require("../assets/img/article2.jpg")
            },
            {
                ArticleId: "4",
                ArticleName: "文章二",
                ArticleContent: "2",
                ArticleAuthor: "a2",
                ArticleImg: require("../assets/img/article2.jpg")
            },
            {
                ArticleId: "5",
                ArticleName: "文章二",
                ArticleContent: "2",
                ArticleAuthor: "a2",
                ArticleImg: require("../assets/img/article2.jpg")
            },
            {
                ArticleId: "6",
                ArticleName: "文章二",
                ArticleContent: "2",
                ArticleAuthor: "a2",
                ArticleImg: require("../assets/img/article2.jpg")
            },
            {
                ArticleId: "7",
                ArticleName: "文章二",
                ArticleContent: "2",
                ArticleAuthor: "a2",
                ArticleImg: require("../assets/img/article2.jpg")
            },
            {
                ArticleId: "8",
                ArticleName: "文章三",
                ArticleContent: "3",
                ArticleAuthor: "a3",
                ArticleImg: require("../assets/img/article2.jpg")
            }
            // {ArticleId: "1", ArticleName: "文章一",ArticleContent:"1",ArticleAuthor:"a1" },
            // {ArticleId: "2", ArticleName: "文章二",ArticleContent:"2",ArticleAuthor:"a2" }
        ];
        let handleClick= function(param,event) {
            //通过ref获取DOM节点
            // console.log(this.refs[param]);
            console.log('id',param);
            console.log('event',event);
        };
        let nextPage=function (param,event) {
            console.log('next',param);
            console.log(event);
        };
        return (
            <div >
                <div className={articleCss.articleList}>
                    <ul className={articleCss.articleUl}>
                        {
                            Articles.map(function (item) {
                                return (
                                    <li className={articleCss.articleLi} ref={item.ArticleId} key={item.ArticleId} onClick={handleClick.bind(this,item.ArticleId)}>
                                        <div className={articleCss.currentArticle}>
                                            <h2 className={articleCss.articleTitle}><a href="#"> {item.ArticleName}</a>
                                            </h2>
                                            <div className={articleCss.articleContext}>{item.ArticleContent}</div>
                                            <div className={articleCss.articleAuthor}>{item.ArticleAuthor}</div>
                                        </div>
                                        <div className={articleCss.imgBox}>
                                            <img className={articleCss.articleImg} src={item.ArticleImg} alt=""/>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className={articleCss.nextPage}>
                       <a className={articleCss.nextPageContext} onClick={nextPage.bind(this,'next')}> 下一页</a>
                    </div>
                </div>
            </div>)
    }
});


// module.exports = Article;
export default Article;