# Tauri + Vue + Vite Template

![Screenshot](./public/v2_screenshot.webp)

Fully configured project template for Tauri and Vue 3 w/ TypeScript and CI.

## Features

- **Vue 3 (TypeScript)** frontend (with devtools)
- **Vite** configured w/ [AutoImport plugin](https://github.com/antfu/unplugin-auto-import)
- **Vitest** for unit tests
- **Github Actions** for proper testing / CI pipeline
- **VS Code** configs for recommended plugins and debugging

## Setting Up

1. Install [Tauri Prerequisites](https://tauri.app/start/prerequisites/)
2. Clone and install dependencies (this template uses `pnpm` by default):

```sh
pnpm i
```

## Usage

A Tauri app has at least [two processes](https://tauri.app/concept/process-model/):

- the Core Process (`backend`, or _main_ process in Electron terminology), and
- the WebView process (`frontend`, or _renderer_ in Electron)

### 🦢 Frontend (TS, PnPM)

#### Running Development Server

Both back- and frontend start with a single command:

```sh
pnpm tauri dev
```

#### Testing

```sh
pnpm test
```

### 🦀 Backend (Rust, Cargo)

Backend code lives in `src-tauri/` (Following commands are to be run from there.)

#### Finding Outdated Rust Dependencies

If you have [cargo-outdated](https://github.com/kbknapp/cargo-outdated) installed:

```sh
cargo outdated
```

#### Upgrading Rust Dependencies

If you have [cargo-edit](https://github.com/killercup/cargo-edit) installed:

```sh
cargo upgrade
```

### Debugging

- The `dev` command has by default `RUST_BACKTRACE=1` set which makes Rust output full backtraces to the console. (Remove it from the `package.json` command if you don't want it).
- If you use VS Code, you can debug Rust code with the included `Debug Tauri` config.

### Building and releasing

#### Building

The project has GitHub Actions set up which will automatically test and build your app with every push and PR. For building manually:

```sh
pnpm tauri build
```

#### Releasing a new version

1. Bump version number by running `pnpm bump [x.y.z]`
2. Run `pnpm check` to update `Cargo.lock`
3. Tag the commit you want to release with `vX.Y.Z`
4. Edit the release notes and push (also tags!)
5. Github workflow will automatically build a new draft release for this version. Publish when ready 🎉

## Elsewhere

- Follow [unessa.net on Bluesky](https://bsky.app/profile/uninen.net) or [@uninen on Twitter](https://twitter.com/uninen)
- Read my learnings around Tauri / Vue / TypeScript and other Web dev topics from my [Today I Learned site](https://til.unessa.net/)

## Contributing

Contributions are welcome! Please follow the [code of conduct](./CODE_OF_CONDUCT.md) when interacting with others.
