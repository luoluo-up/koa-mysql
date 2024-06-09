const Koa = require('koa')
const app = new Koa()
const { koaBody } = require('koa-body')
app.use(koaBody())
module.exports = app