use crate::api::{ client::Api, routes::articles::{ fetch_articles, Articles } };
use tauri::State;

#[tauri::command]
pub async fn get_articles(
    api: State<'_, Api>,
    featured: Option<bool>,
    limit: Option<u8>,
    offset: Option<u16>
) -> Result<Articles, String> {
    fetch_articles(&api, featured, limit, offset).await.map_err(|e| e.to_string())
}
