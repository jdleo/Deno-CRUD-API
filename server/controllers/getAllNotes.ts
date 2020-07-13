import { Note } from '../helpers/connect.ts';

// schemas
import { NoteSchema } from '../models/Note.ts';

// function for getting all notes from db
export const getAllNotes = async (ctx: any) => {
  try {
    // get all notes (sorted by timestamp descending)
    const notes: NoteSchema[] = await Note.find({
      _id: { $ne: null },
    });

    // send notes back in response
    ctx.response.body = notes;
  } catch (e) {
    // when request fails
    ctx.response.body = null;
    ctx.response.status = 500;
    console.log(e);
  }
};
