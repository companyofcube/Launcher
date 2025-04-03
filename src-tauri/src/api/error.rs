use std::fmt;

#[derive(Debug)]
pub enum ServerError {
    Reqwest(reqwest::Error),
    InvalidResponse(String),
}

impl fmt::Display for ServerError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            Self::Reqwest(e) => write!(f, "HTTP error: {}", e),
            Self::InvalidResponse(msg) => write!(f, "Invalid response: {}", msg),
        }
    }
}

impl From<reqwest::Error> for ServerError {
    fn from(err: reqwest::Error) -> Self {
        Self::Reqwest(err)
    }
}
