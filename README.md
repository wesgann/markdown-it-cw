# markdown-it-cw
Renders this markdown

```md
__underline__
```

to this HTML

```HTML
<u>underline</u>
```

This is based on markdown-it-underline and for use with ConnectWise REST API

## Install

```sh
npm install markdown-it-cw
```

## Usage

```js
const markCw = require('markdown-it-cw');
const md = require('markdown-it')().use(markCw);

Example Usage:
console.log(md.renderInline('__underline__'));
```

## Development

Add tests in [test.js](test.js).

```sh
npm test
npm version [patch|minor|major]
npm publish
```
