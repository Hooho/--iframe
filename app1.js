// npm i koa koa-static koa-gzip koa-cors koa-etag path  chalk koa-router -D


var koa = require("koa")
var serve = require("koa-static")
var path = require("path")
var PORT = 3001
var HOST = "localhost"

var app = new koa();

app

    .use(serve(path.join(__dirname, '/app1')))

    .listen(PORT, function () {

        console.log(
            '\n' +
            ' OPEN '+
            ' Server listening on ' +
            `\nhttp://${HOST}:${PORT}\n`
        )
    })

