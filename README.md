# Tauri + Vue + Vite template

Simple and opinionated project template for Tauri and Vue 3.

- Vue 3
- Vite
  - Hot Module Replacement
  - [AutoImport plugin](https://github.com/antfu/unplugin-auto-import)
- TypeScript
- Eslint, Prettier
- Tailwind CSS w/ PostCSS
- Vitest for unit tests
- Github Actions

## Setting Up

1. Install [Tauri Prerequisites](https://tauri.studio/v1/guides/getting-started/prerequisites)
2. Clone and install frontend dependencies (this template uses `pnpm` by default but you can use whatever package manager you like):

```sh
pnpm i
```

## Usage

The app is has two parts (see [Tauri Process Model docs](https://tauri.app/v1/guides/architecture/process-model)); the Core Process (`backend`, or _main_ process in Electron terminology) and the WebView process (`frontend`, or _renderer_ in Electron terminology).

### Frontend / WebView (Node, PnPM)

#### Running Tauri + Vite Development Server

Both backend and frontend start simultaneously:

```sh
pnpm dev
```

#### Testing

```sh
pnpm test
```

### Backend / Core (Rust, Cargo)

Backend code lives in `src-tauri/`. (Following commands are to be run in there.)

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

- You can get Rust to output a backtrace by running with `RUST_BACKTRACE=1` environment variable

### Building and releasing

#### Building

The project has GitHub Actions set up which will automatically test and build your app with every push and PR. For building manually:

```sh
pnpm build
```

#### Releasing a new version

1. Bump version number (In `package.json`, and `src-tauri/`)
2. Run `pnpm check` to update `Cargo.lock`
3. Tag the commit you want to release with `vX.Y.Z`
4. Github workflow will automatically build a new draft release for this version. Edit the release notes and publish when ready 🎉

## Elsewhere

- [Follow @uninen](https://twitter.com/uninen) on Twitter
- Read my continuously updating learnings from Vite / Vue / TypeScript and other Web development topics from my [Today I Learned site](https://til.unessa.net/)

## Contributing

Contributions are welcome! Please follow the [code of conduct](./CODE_OF_CONDUCT.md) when interacting with others.
