module.exports = {
    "/api": {
        target: "http://localhost:3000",

    },
    "/server": {
        target: "http://localhost:3000",
        "secure": false,
        "pathRewrite": {
            "^/server": ""
        }
    }
}