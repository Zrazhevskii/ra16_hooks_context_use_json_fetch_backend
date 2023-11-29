const Koa = require('koa');
const cors = require('koa2-cors');
const koaBody = require('koa-body').default;
const { randomUUID } = require('crypto');
const PORT = 3000;
const router = require('./routes');
const app = new Koa();

app.use(
    koaBody({
        text: true,
        urlencoded: true,
        multipart: true,
        json: true,
    })
);

app.use(
    cors({
        origin: '*',
        credentials: true,
        'Access-Control-Allow-Origin': true,
        allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    })
);

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(
        `Сервер запущен и работает по адресу: http://localhost:${PORT}`
    );
});
