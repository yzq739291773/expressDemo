const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
const route = require('koa-route');
const path = require('path')
const server = require('koa-static')

// 根据请求的类型，返回给相应类型的数据，默认的请求类型为xml

// const main = ctx => {
//     if (ctx.request.accepts('xml')) {
//         ctx.response.type = 'xml';
//         ctx.response.body = '<data>hello world</data>'
//     } else if (ctx.request.accepts('json')) {
//         ctx.response.type = 'json'
//         ctx.response.body = { data: 'hello world' }
//     } else if (ctx.request.accepts('html')) {
//         ctx.response.type = 'html';
//         ctx.response.body = '<p>Hello World</p>';
//     } else {
//         ctx.response.type = 'text';
//         ctx.response.body = 'Hello World';
//     }
// };

// 网页模板

// const main = ctx => {
//     ctx.response.type = 'html';
//     ctx.response.body = fs.createReadStream('./index.html')
// }

// 原生路由

// const main = ctx => {
//     if (ctx.request.path !== '/') {
//         ctx.response.type = 'html'
//         ctx.response.body = '<a>index page</a>'
//     } else {
//         ctx.response.body = 'hello world'
//     }
// }

// koa-route 路由模块
// 
// const about = ctx => {
//     ctx.response.type = 'html';
//     ctx.response.body = '<a>index page</a>'
// }

// const main = ctx => {
//     ctx.response.body = 'hello world';
// }

// app.use(route.get('/', main))
// app.use(route.get('/about', about))

// 静态资源

// const main = server(path.join(__dirname))

// 重定向

// const main = ctx => {
//     ctx.response.body = 'hello world';
// }

// const redirect = ctx => {

//     ctx.response.body = '<a href="/">index page</a>'
//     ctx.response.redirect('/');
// }

// app.use(route.get('/', main))
// app.use(route.get('/redirect', redirect))

app.listen(3000);