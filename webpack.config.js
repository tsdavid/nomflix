const path = require("path");

console.log(process.env);

module.exports ={
    entry: './index.js',
    mode: "development",
    output: {
        path: path.resolve(__dirname, "output"),
        filename:"awesome-output.js"
    }
}