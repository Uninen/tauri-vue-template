#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::api::shell;
use tauri::{CustomMenuItem, Manager, Menu, Submenu};

#[tauri::command]
fn backend_add(number: i32) -> i32 {
    println!("Backend was called with an argument: {}", number);
    return number + 2;
}

fn main() {
    let ctx = tauri::generate_context!();
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![backend_add])
        .menu(
            tauri::Menu::os_default("Tauri Vue Template").add_submenu(Submenu::new(
                "Help",
                Menu::with_items([CustomMenuItem::new(
                    "Online Documentation",
                    "Online Documentation",
                )
                .into()]),
            )),
        )
        .on_menu_event(|event| {
            let event_name = event.menu_item_id();
            match event_name {
                "Online Documentation" => {
                    let url = "https://github.com/Uninen/tauri-vue-template".to_string();
                    shell::open(&event.window().shell_scope(), url, None).unwrap();
                }
                _ => {}
            }
        })
        .run(ctx)
        .expect("error while running tauri application");
}
