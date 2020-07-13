import { Note, ObjectId } from '../helpers/connect.ts';

// schemas
import { NoteSchema } from '../models/Note.ts';

// function for deleting a note from db (given ID)
export const deleteNote = async (ctx: any) => {
  try {
    // get id from request
    const id: string = ctx.params.id;

    // attempt to edit note with given id and fields to update
    const res = await Note.deleteOne({ _id: ObjectId(id) });

    // send notes back in response
    ctx.response.body = res;
  } catch (e) {
    // when request fails
    ctx.response.body = null;
    ctx.response.status = 500;
    console.log(e);
  }
};
