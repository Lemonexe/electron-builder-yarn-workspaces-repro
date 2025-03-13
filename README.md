# Missing externals bug reproduction

Reproduction of bug, where `node_modules` are not crawled when running `electron-builder` in a yarn workspace.

## Reproduction steps (electron-builder@26.0.11)

Using Ubuntu 24.04.1 LTS, Node.js v22.11.0 

Instructions are valid for Linux; executable path will differ as per OS.

1. Enable yarn if necessary
2. Run in bash:
```bash
yarn
yarn workspace @packages/app run build
./packages/app/release/@packagesapp-1.0.0.AppImage --no-sandbox
```
3. App immediately crashes with error:
```
A JavaScript error occurred in the main process
Uncaught Exception:
Error: Cannot find module 'is-odd'
```

## Correct behavior (electron-builder@26.0.3)

1. Run in bash:
```bash
git checkout stable-version
rm -r ./packages/app/release
yarn
yarn workspace @packages/app run build
./packages/app/release/@packagesapp-1.0.0.AppImage --no-sandbox
```
2. App runs and outputs
```bash
Let's see if these numbers are odd:
1 true
2 false
```
