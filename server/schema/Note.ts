export interface INote {
  _id: { $oid: string };
  title: string;
  body: string;
  timestamp: Date;
  likes: number;
}
