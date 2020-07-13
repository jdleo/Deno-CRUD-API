import { Note } from '../helpers/connect.ts';

// schemas
import { NoteSchema } from '../models/Note.ts';

// function for adding note to db
export const addNote = async (ctx: any) => {
  try {
    // get title, body from request
    let data: any = await ctx.request.body();
    const { title, body } = data.value;

    // create data to be uploaded to db
    const payload = {
      title: title,
      body: body,
      timestamp: Date.now(),
      likes: 0,
    };

    // attempt to insert new note in db
    const newNote: NoteSchema = await Note.insertOne(payload);

    // send notes back in response
    ctx.response.body = newNote;
  } catch (e) {
    // when request fails
    ctx.response.body = null;
    ctx.response.status = 500;
    console.log(e);
  }
};
