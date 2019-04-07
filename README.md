# FPTU Javascript SDK

A simple SDK for scaffolding FPTU.tech projects.

## Installation

Prerequisites: Node.js (>=6.x, 8.x preferred), npm version 3+ and Git.

### Install as a library

```
$ npm install fptu-sdk
```

### Build universal javascript

-   Install yarn `npm install yarn -g`.
-   Clone project, run `yarn` and `yarn build`, get file `fptu-sdk.js` from `/dist/` folder.
-   You may upload that javascript file to a CDN for later use.
-   If you don't want to build you can use that file here: `https://sdk.fptu.tech/fptu-sdk.js`

### How to use SDK universal javascript

-   Add `<script src="fptu-sdk.js"></script>` to your index.html.
-   Deal with the `window.FPTUSDK` global, and you got the world!

## Usage

Example:

```
const sdk = require("fptu-sdk");

// Get overview
sdk.overview.getOverview().then(data => console.log(data));
```
