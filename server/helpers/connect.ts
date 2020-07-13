import { MongoClient, ObjectId } from 'https://deno.land/x/mongo@v0.8.0/mod.ts';

// create client
const client = new MongoClient();

// connect to mongodb with URI in .env
client.connectWithUri(Deno.env.get('MONGO_URI')!);

// specifying the database name
const dbname: string = 'main';

// db reference
const db = client.database(dbname);

// collections declarations
const Note = db.collection('notes');

// expose everything to rest of codebase
export { db, Note, ObjectId };
