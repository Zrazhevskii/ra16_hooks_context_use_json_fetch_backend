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
        ctx.response.status = 204;
    })
    .get('/error', async (ctx) => {
        ctx.body = {status: "Internal Error"};
        ctx.response.status = 500;
    })
    .get('/loading', async (ctx) => {
        await new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 5000);
        });
        ctx.response.body = {status: "ok"};
      });

    module.exports = router;
