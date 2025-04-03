use reqwest::Client;

pub struct Api {
    client: Client,
    base_url: String,
}

impl Api {
    pub fn new() -> Self {
        let user_agent = format!("CompanyOfCube/{}", env!("CARGO_PKG_VERSION"));
        let client = Client::builder()
            .user_agent(user_agent)
            .build()
            .expect("Failed to build HTTP client");
        Self {
            client,
            base_url: "https://api.companyofcube.fr".to_string(),
        }
    }

    pub async fn get(
        &self,
        endpoint: &str
    ) -> Result<serde_json::Value, crate::api::error::ServerError> {
        let url = format!("{}/{}", self.base_url, endpoint);
        self.client.get(&url).send().await?.json().await.map_err(Into::into)
    }
}
