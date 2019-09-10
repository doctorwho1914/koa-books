const Koa = require('koa');
const app = new Koa();
const err = require('./src/middleware/error');
const router = require('./src/routes/books');
const koaBody = require('koa-body');

app.use(koaBody());
app.use(err);
app.use(router.routes());
app.use(router.allowedMethods());

// logger

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});


app.listen(3000);
