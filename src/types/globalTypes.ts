export type IBook = {
  _id: string;
  title: string;
  image?: string;
  author: string;
  genre: string;
  publicationDate: string;
  Review: string[];
};

export type IUser = {
  email: string;
};
