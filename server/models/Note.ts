export interface NoteSchema {
  _id: { $oid: string };
  title: string;
  body: string;
  timestamp: number;
  likes: number;
}
