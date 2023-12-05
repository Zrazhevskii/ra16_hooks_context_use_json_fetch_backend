const Router = require('koa-router');
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.response.body = 'Всем приветы!';
    next();
});

router.get('/data', (ctx, next) => {
    ctx.response.body = { status: 'все OK, данные получены' };
});

router.get('/error', async (ctx, next) => {
    ctx.response.body = { status: 'Упс, а у нас тут Internal Error' };
});

router.get('/loading', async (ctx, next) => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 5000);
    });
    ctx.response.body = { status: 'все OK, все загрузилось' };
});

module.exports = router;
