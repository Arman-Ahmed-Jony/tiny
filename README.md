#@dev_john/tiny
___
![npm (scoped)](https://img.shields.io/npm/v/@dev_john/tiny?style=plastic) ![issues](https://img.shields.io/github/issues/Arman-Ahmed-Jony/tiny?style=plastic) ![size](https://img.shields.io/bundlephobia/min/@dev_john/tiny?style=plastic)
npm tiny package workshop. this removes spaces from a given string.

## Install

```$ npm install @dev_john/tiny```

## Usage

```js
const tiny = require("@bamblehorse/tiny");

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```