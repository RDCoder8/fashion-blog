export default function Article(props) {
    return (
        props.articleData.map((article) => {
            return (
        <article>
            <time dateTime={article.datetime}>{article.date}</time>
            <h2 className="blog-title">{article.title}</h2>
            <img src={article.image} alt={article.alt}/>
            <p>{article.text}</p>
            <aside><a href="#">Continues...</a></aside>
        </article>
            )
        })
    )
}