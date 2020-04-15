import { Component } from "@angular/core";
import { BookService } from "src/app/services/book.service";
import { Book } from "src/app/models/Book.model";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"]
})
export class BookListComponent {
  constructor(
    public bookService: BookService,
  ) { }

}
