const Router = require('koa-router');
const Book = require('../models/book');
const Cache = require('../middleware/cache');

let router = new Router({
    prefix: '/api/books'
});


router.get('/', Cache.getOneKey,async (ctx, next) => {

    const data = await Book.list(ctx.query);

    //add to cache
    await Cache.addOneKey(ctx.originalUrl, data);

    ctx.body = {source: 'db', data};
});

router.post('/', async (ctx) => {
    const bookId = await Book.add(ctx.request.body);
    const data = await  Book.getById(bookId);

    ctx.status = 201;
    ctx.body = {data};

});

router.put('/:id', async (ctx) => {

    const bookId = ctx.params.id;

    await Book.edit(bookId, ctx.request.body);
    const data = await  Book.getById(bookId, bookId);

    ctx.body = {data};

});

module.exports = router;
