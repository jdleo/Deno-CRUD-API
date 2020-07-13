## Deno CRUD

This is an example CRUD app, fully using Deno. There are notes, where the interface is defined in `/server/models/Note.ts`, and basic C/R/U/D operations with a Deno, MongoDB driver.

## How to Run

1. First, set a `MONGO_URI` environment variable, set it equal to your MongoDB connection string and put it in `.env` at the root level of this project.

2. Next, run the following deno command in root of your project:

```
deno run --allow-read --allow-env --allow-net --allow-plugin --unstable --allow-write server/main.ts
```

3. View any API routes in browser:

```
localhost:5757/
localhost:5757/notes
localhost:5757/notes/:id
```
