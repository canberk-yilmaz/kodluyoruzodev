const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen('3000');
    
router
  .get('/', (ctx) => {
    ctx.body = '<h1>Index Sayfasına Hoşgeldiniz!</h1>';
  })
  .get('/about', (ctx) => {
    ctx.body = '<h1>Hakkımda Sayfasına Hoşgeldiniz!</h1>';
  })
  .get('/contact', (ctx) => {
    ctx.body = '<h1>İletişim Sayfasına Hoşgeldiniz!</h1>';
  })