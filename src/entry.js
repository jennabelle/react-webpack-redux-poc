// need to install loaders (css-loader, style-loader) for webpack to bundle and load css files
require("!style!css!../style.css");

// 1st file, open index.html in browser to this work
document.write("It works. ");

// 2nd file, included in index.html
document.write(require("./content.js"));
