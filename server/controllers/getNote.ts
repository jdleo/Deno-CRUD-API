import { Note, ObjectId } from '../helpers/connect.ts';

// schemas
import { NoteSchema } from '../models/Note.ts';

// function for reading a note from db (given ID)
export const getNote = async (ctx: any) => {
  try {
    // get id from request
    const id: string = ctx.params.id;

    // attempt to get note with given id
    const note: NoteSchema = await Note.findOne({ _id: ObjectId('5f0ca7ca00b8a17800265ffe') });

    // send notes back in response
    ctx.response.body = note;
  } catch (e) {
    // when request fails
    ctx.response.body = null;
    ctx.response.status = 500;
    console.log(e);
  }
};
