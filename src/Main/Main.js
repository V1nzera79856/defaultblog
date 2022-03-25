import "./main.scss"
import {Article} from "../Article/Article"
import {useState} from "react";

const temp = [{logo: "Logo 1", title: "Lorem ipsum dolor sit amet", short: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa doloribus fugiat odio quas quasi repudiandae totam voluptas! Aspernatur aut consequuntur earum id in ipsum libero necessitatibus neque, nesciunt nobis possimus?"}, {logo: "Logo2", title: "Lorem ipsum dolor sit amet", short: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa doloribus fugiat odio quas quasi repudiandae totam voluptas! Aspernatur aut consequuntur earum id in ipsum libero necessitatibus neque, nesciunt nobis possimus?"}]

export const Main = () => {
    const  [articles, setArticles] = useState(temp)
    console.log(articles)
    return (

        <>
            <main className="main-container">

                {articles.map((article, idx) => {
                    return (
                        <Article key={idx} logo={article.logo} short={article.short} title={article.title} />
                    )
                })}
            </main>
        </>
    )
}