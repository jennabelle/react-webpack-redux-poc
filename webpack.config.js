// the 'webpack' command will load this config file

// If the project grows the compilation may take a bit longer. So we want to display some kind of progress bar. And we want colors…
// webpack --progress --colors

// watch mode (but webpack-dev-server is better)
// if any change is detected, it’ll run the compilation again
// webpack --progress --colors --watch

// npm install webpack-dev-server -g

// HOT RELOADING!!!
// to run webpack-dev-server, be in same directory as index.html
// 'webpack-dev-server --progress --colors' to run webpack-dev-server
// go to http://localhost:8080/webpack-dev-server/

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "./src/bundle.js"
    },
    module: {
        loaders: [
            // jenna: not sure if you can put 2 loaders here
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
        ]
    }
};
