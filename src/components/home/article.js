/**
 * Created by fang on 2017/8/6.
 */
import React from'react';
import  '../../assets/less/home/article.less';
// let articleCss = require('../../assets/less/home/article.css');

let Article = React.createClass({

    render: function () {
        let Articles = [
            {
                ArticleId: "1",
                ArticleName: "文章一",
                ArticleContent: "1",
                ArticleAuthor: "a1",
                ArticleImg: require("../../assets/img/article1.jpg")
            },
            {
                ArticleId: "2",
                ArticleName: "文章二",
                ArticleContent: "2",
                ArticleAuthor: "a2",
                ArticleImg: require("../../assets/img/article2.jpg")
            },
            {
                ArticleId: "3",
                ArticleName: "文章二",
                ArticleContent: "2",
                ArticleAuthor: "a2",
                ArticleImg: require("../../assets/img/article2.jpg")
            },
            {
                ArticleId: "4",
                ArticleName: "文章二",
                ArticleContent: "2",
                ArticleAuthor: "a2",
                ArticleImg: require("../../assets/img/article2.jpg")
            },
            {
                ArticleId: "5",
                ArticleName: "文章二",
                ArticleContent: "2",
                ArticleAuthor: "a2",
                ArticleImg: require("../../assets/img/article2.jpg")
            },
            {
                ArticleId: "6",
                ArticleName: "文章二",
                ArticleContent: "2",
                ArticleAuthor: "a2",
                ArticleImg: require("../../assets/img/article2.jpg")
            },
            {
                ArticleId: "7",
                ArticleName: "文章二",
                ArticleContent: "2",
                ArticleAuthor: "a2",
                ArticleImg: require("../../assets/img/article2.jpg")
            },
            {
                ArticleId: "8",
                ArticleName: "文章三",
                ArticleContent: "3",
                ArticleAuthor: "a3",
                ArticleImg: require("../../assets/img/article2.jpg")
            }
            // {ArticleId: "1", ArticleName: "文章一",ArticleContent:"1",ArticleAuthor:"a1" },
            // {ArticleId: "2", ArticleName: "文章二",ArticleContent:"2",ArticleAuthor:"a2" }
        ];
        let handleClick= function(param,event) {
            //通过ref获取DOM节点
            // console.log(this.refs[param]);
            window.open("/#/home/articleDetails/" +param ,'_self');
            console.log('id',param);
            console.log('event',event);
        };
        let nextPage=function (param,event) {
            console.log('next',param);
            console.log(event);
        };
        return (
            <div >
                <div className="articleList">
                    <ul className="articleUl">
                        {
                            Articles.map(function (item) {
                                return (
                                    <li className="articleLi" ref={item.ArticleId} key={item.ArticleId} onClick={handleClick.bind(this,item.ArticleId)}>
                                        <div className="currentArticle">
                                            <h2 className="articleTitle"><a href="#"> {item.ArticleName}</a>
                                            </h2>
                                            <div className="articleContext">{item.ArticleContent}</div>
                                            <div className="articleAuthor">{item.ArticleAuthor}</div>
                                        </div>
                                        <div className="imgBox">
                                            <img className="articleImg" src={item.ArticleImg} alt=""/>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="nextPage">
                       <a className="nextPageContext" onClick={nextPage.bind(this,'next')}> 下一页</a>
                    </div>
                </div>
            </div>)
    }
});


// module.exports = Article;
export default Article;