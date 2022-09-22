import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

const articles = blogData.posts

function ArticleList({ posts }) {
    const articleData = articles.map((posts) => {
        return (
            <Article key={posts.id} title={posts.title} date={posts.date} preview={posts.preview} />
        )
    });
    return (
        <main>
            {articleData}
        </main>
    );
}
export default ArticleList;
