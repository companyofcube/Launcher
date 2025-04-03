mod commands;
mod api;

use api::client::Api;
use tauri::Builder;

pub fn run() {
    Builder::default()
        .plugin(tauri_plugin_opener::init())
        .manage(Api::new())
        .invoke_handler(tauri::generate_handler![commands::greet, commands::get_articles])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
