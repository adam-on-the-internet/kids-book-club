import { Component } from "@angular/core";
import { BookService } from "src/app/services/book.service";
import { Book } from "src/app/models/Book.model";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"]
})
export class BookListComponent {
  constructor(
    public bookService: BookService,
    private navHelper: NavHelperService,
  ) { }

  public goDetails(book: Book) {
    this.navHelper.goBookDetails(book.id);
  }

}
