# p5play-render

Server side image rendering demo. Demonstrates how p5play can be used with the `jsdom` and `skia-canvas` packages to make an image.

## Requirements

Install [node.js](https://nodejs.org). Then in a Terminal, open this folder and run `node install`, to install the necessary packages (dependencies) needed to run the server program.

## Files Overview

- `package.json` : contains info about the project and its dependencies.
- `jsconfig.json` : a config file for VSCode that enables autocompletion for p5play.
- `render-node.js` : renders art using Node.js.

## Running the Server

In a Terminal, open this folder and run:

```zsh
node render.js
```

The program should finish in under a second and you should see a new `sketch.png` file added to this folder.

Why did I make this demo? Being able to render server-side physics simulations could be helpful for debugging.
