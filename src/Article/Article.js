import "./article.scss"

export const Article = ({logo,title,short}) => {
    return (
        <>
            <section className="article-section">
                <div className="article-image">
                    {logo}
                </div>
                <div className="article-main">
                    <h2 className="article-title">
                        {title}
                    </h2>
                    <div className="article-short">
                        {short}
                    </div>
                </div>
            </section>
        </>
    )
}