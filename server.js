import Koa from 'koa';
import Router from 'koa-router';
import respond from 'koa-respond';
import mongoose from 'mongoose';
import bodyParser from 'koa-bodyparser';
import routes from './api/routes/generalRoutes';
import General from './api/models/generalModel';

const port = 3000;
const app = new Koa();
const router = Router();

mongoose.connect('mongodb://localhost/babelGeneralsDB')

app.use(bodyParser());
app.use(respond());

routes(router);

app.use(router.routes())
        .use(router.allowedMethods());

app.listen(port);

console.log(`Listening on ${port}`);

export default app.listen();
