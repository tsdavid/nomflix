const path = require("path");
module.exports = {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "output"),
        filename:"awesome-output.js"
    }
};