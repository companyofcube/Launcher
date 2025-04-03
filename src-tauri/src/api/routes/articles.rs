use serde::Serialize;

use crate::api::client::Api;
use crate::api::error::ServerError;

#[derive(Debug, Serialize)]
pub struct Article {
    pub id: u64,
    pub title: String,
    pub summary: String,
    pub blog_url: String,
    pub created_at: String,
    pub published_at: String,
    pub thumbnails: Thumbnails,
}

#[derive(Debug, Serialize)]
pub struct Thumbnails {
    pub main: String,
}

#[derive(Debug, Serialize)]
pub struct Articles {
    pub articles: Vec<Article>,
}

pub async fn fetch_articles(
    api: &Api,
    featured: Option<bool>,
    limit: Option<u8>,
    offset: Option<u16>
) -> Result<Articles, ServerError> {
    let query = format!(
        "articles?featured={}&limit={}&offset={}",
        featured.unwrap_or(false),
        limit.unwrap_or(5),
        offset.unwrap_or(0)
    );

    let json = api.get(&query).await?;

    let articles = json["items"]
        .as_array()
        .ok_or_else(|| ServerError::InvalidResponse("items not an array".to_string()))?
        .iter()
        .map(to_dto)
        .collect::<Result<Vec<Article>, ServerError>>()?;

    Ok(Articles { articles })
}

fn to_dto(item: &serde_json::Value) -> Result<Article, ServerError> {
    let thumbnails = item["thumbnails"]
        .as_object()
        .ok_or_else(||
            ServerError::InvalidResponse("thumbnails not found or invalid".to_string())
        )?;

    let main_thumbnail = thumbnails
        .get("main")
        .and_then(|value| value.as_str())
        .ok_or_else(||
            ServerError::InvalidResponse("thumbnails.main not found or invalid".to_string())
        )?;

    Ok(Article {
        id: item["id"]
            .as_u64()
            .ok_or_else(|| ServerError::InvalidResponse("id not found or invalid".to_string()))?,
        title: item["title"]
            .as_str()
            .ok_or_else(|| ServerError::InvalidResponse("title not found or invalid".to_string()))?
            .to_string(),
        summary: item["summary"]
            .as_str()
            .ok_or_else(||
                ServerError::InvalidResponse("summary not found or invalid".to_string())
            )?
            .to_string(),
        blog_url: item["blogUrl"]
            .as_str()
            .ok_or_else(||
                ServerError::InvalidResponse("blogUrl not found or invalid".to_string())
            )?
            .to_string(),
        created_at: item["createdAt"]
            .as_str()
            .ok_or_else(||
                ServerError::InvalidResponse("createdAt not found or invalid".to_string())
            )?
            .to_string(),
        published_at: item["publishedAt"]
            .as_str()
            .ok_or_else(||
                ServerError::InvalidResponse("publishedAt not found or invalid".to_string())
            )?
            .to_string(),
        thumbnails: Thumbnails {
            main: main_thumbnail.to_string(),
        },
    })
}
