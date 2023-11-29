const Router = require('koa-router');
const router = new Router();
const data = require('./data.json')
const { randomUUID } = require('crypto');

router
    .get('/', (ctx, next) => {
        ctx.body = 'Всем приветы!';
        next();
    })
    .get('/data', (ctx) => {
        ctx.body = data;
    })

    module.exports = router;
