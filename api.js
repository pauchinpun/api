const Koa = require('koa');
const app = new Koa();
require('dotenv').config();



app
    .use(async ctx => {
        ctx.body = 'Hola';
    });


console.log("Enter to server -- http://localhost:3000")