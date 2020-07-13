// imports
import { Application } from 'https://deno.land/x/oak/mod.ts';
import 'https://deno.land/x/dotenv/load.ts';

const app = new Application();

app.use((ctx) => {
  ctx.response.body = {
    hello: 'World! 🦕',
    test_env: Deno.env.get('TEST'),
  };
});

await app.listen({ port: 5757 });
