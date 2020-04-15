import { Injectable } from "@angular/core";
import { Book } from "../models/Book.model";
import { BOOK_LIST } from "../constants/book.constants";

@Injectable({
  providedIn: "root"
})
export class BookService {
  public get allBooks(): Book[] {
    return BOOK_LIST;
  }

  public get nextBook(): Book {
    return this.allBooks[0];
  }
}
