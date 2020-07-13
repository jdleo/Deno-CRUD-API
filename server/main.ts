// imports
import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import 'https://deno.land/x/dotenv/load.ts';

// database controllers
import { getAllNotes } from './controllers/getAllNotes.ts';
import { addNote } from './controllers/addNote.ts';
import { getNote } from './controllers/getNote.ts';

// set up router
const router = new Router();

// router paths
router
  // base path
  .get('/', (ctx) => {
    ctx.response.body = {
      welcome: 'Welcome to Notes API, powered by Deno! 🦕',
      health: 'ok',
    };
  })
  // get all notes
  .get('/notes', getAllNotes)
  // create, read, update, delete (CRUD)
  .post('/note', addNote)
  .get('/note/:id', getNote);

// init app
const app = new Application();

// use routes and allowed methods
app.use(router.routes());
app.use(router.allowedMethods());

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get('X-Response-Time');
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set('X-Response-Time', `${ms}ms`);
});

// listen on port 5757
await app.listen({ port: 5757 });
