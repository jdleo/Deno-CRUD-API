import { Note, ObjectId } from '../helpers/connect.ts';

// schemas
import { NoteSchema } from '../models/Note.ts';

// function for editing a note from db (given ID)
export const editNote = async (ctx: any) => {
  try {
    // get id from request
    const id: string = ctx.params.id;

    // get fields to update
    const body: any = await ctx.request.body();

    // attempt to edit note with given id and fields to update
    const note = await Note.updateOne(
      { _id: ObjectId('5f0ca7ca00b8a17800265ffe') },
      { $set: body }
    );

    // send notes back in response
    ctx.response.body = note;
  } catch (e) {
    // when request fails
    ctx.response.body = null;
    ctx.response.status = 500;
    console.log(e);
  }
};
