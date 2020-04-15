import { Injectable } from '@angular/core';
import { Book } from '../models/Book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public books: Book[] = [
    {
      id: "1",
      title: "Mike Mulligan and his Steam Shovel",
      details: "",
      debateQuestion: "",
      sides: [
        {
          name: "",
          details: "",
        },
        {
          name: "",
          details: "",
        },
      ],
      youtubeLink: "https://www.youtube.com/watch?v=NQjHJKNyoUE&feature=emb_title",
    }
  ];

  constructor() { }
}
