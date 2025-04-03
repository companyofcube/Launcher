type Article = {
  id: number
  title: string
  summary: string
  blog_url: string
  created_at: string
  published_at: string
  thumbnails: {
    main: string
  }
}

export type ArticlesType = { articles: Article[] }

export type ArticlePayload = Partial<{
  featured: boolean
  limit: number
  offset: number
}>
