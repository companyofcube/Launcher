import { useNavigate } from "react-router"
import { ArticlePayload, ArticlesType } from "../domain/articles"
import useInvoke from "../hooks/useInvoke"

export function Home() {
  const navigate = useNavigate()

  const { data, loading } = useInvoke<ArticlesType, ArticlePayload>({
    command: "get_articles",
    fetchOnLoad: true,
    params: {
      limit: 10,
      offset: 0,
    },
  })

  const articles = data?.articles ?? []

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>

      {loading && <p>Loading...</p>}
      {!loading && articles.length === 0 && <p>No articles found.</p>}

      <button onClick={() => navigate("/")}>Go to App</button>
      {articles.length > 0 &&
        articles.map((article: any) => (
          <div key={article.id}>
            <h2>{article.title}</h2>
          </div>
        ))}
    </div>
  )
}
