import { Book } from "./book";

export interface User {
  userName: string,
  books?: Book[],
  _id: string
}