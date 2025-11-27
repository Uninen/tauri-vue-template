# Changelog

## 2.9.3 (2025-11-27)

- Feat: added `rust-toolchain.toml` to explicitly set stable toolchain.
- Chore: bumped all deps.

## 2.9.0 (2025-10-29)

- Refactor: moved Tailwind 4 config into `main.css`.
- Chore: bumped CI Node version to 24.
- Chore: bumped all deps.

## 2.6.0 (2025-06-25)

- Refactor: bumped Vite target versions to `safari16` and `chrome107` (matches Vite 7 'baseline-widely-available' defaults)
- Refactor: tweaked the included VSCode settings.
- Chore: bumped all deps.

## 2.3.0 (2025-03-20)

Note: starting from this release, the versioning of this template will follow
[Tauri.major].[Tauri.minor].[Template.version] versioning scheme.

- Feat: added `tauri-plugin-prevent-default` to prevent default browser shortcuts.
- Enhancement: open browser devtools by default.
- Enhancement: use considerable leaner icons dependency for faster development.
- Enhancement: updated Vite build config.
- Refactor: bumped Tailwind to version 4.
- Fix: allow pnpm postinstall scripts (Fixes #87, thanks @onurusluca for the report)
- Chore: bumped all deps.

## 2.0.2 (2024-11-16)

- Feat: added `@egoist/tailwindcss-icons` plugin.
- Enhancement: added optimization settings to Tauri config.
- Chore: clean up v1->v2 leftovers.
- Fix: Vite, Eslint configs..

## 2.0.0 (2024-11-07)

- Feat: upgraded the template to Tauri v2.
- Feat: added Pinia.
- Feat: added CSP for security.
- Feat: added new `bump` command for programatically bump version number.
- Fix: fixed Vue devtools.
- Chore: migrated to new Renovate config.
- Chore: bumped all front deps.

## 0.4.0 (2023-12-09)

- Feat: enabled automerge for Renovate Bot.
- Fix: use `cross-env` to setting env for Windows compatibility.
- Chore: aligned project settings to better match the official Tauri starter.
- Chore: bumped all front deps.
- Chore: bumped all GitHub workflow action versions.

## 0.3.0 (2022-09-29)

- Feat: added debug config for VSCode. Thanks @gabriel-andreescu for the contribution!
- Feat: added vue-devtools integration.
- Feat: open browser devtools automatically on start.
- Feat: changed app icon to Vue icon.
- Feat: added `RUST_BACKTRACE=1` to the default dev command.
- Fix: added empty dist folder to make Rust extension happy.
- Fix: fixed Vite build target to match tauri create app config.
- UI: smarter styles and markup.
- Docs: documented howto implement Electron-like `titleBarStyle: 'hidden'` window, and that the sync backend commands block the UI.
- Chore: bumped deps.

## 0.2.0 (2022-07-10)

- Fix: changed app name (`packageName` in `src-tauri/tauri.conf.json`).
- Fix: made Vite config more robust.
- Tooling: added `.vscode` and recommendation fot Volar extension.
- Refactor: removed `vite-plugin-tauri` from frontend deps.
- Chore: tweaked Vite config for better dev experience.
- Chore: bumped deps.
- Docs: better README.

## 0.1.0 (2022-06-16)

Hello Tauri 1.0!

- Feat: Added a separate release workflow.
- Refactor: converted menu to use `Menu::os_default`. Thank You to @JonasKruckenberg for the tip!
- Docs: added more docs on usage, fixed prerequisites link.
- Chore: Bumped all Vite + Tauri deps.

## 0.0.1 (2022-04-27)

- Initial version
