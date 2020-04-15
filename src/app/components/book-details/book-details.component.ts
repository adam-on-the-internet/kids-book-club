import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BookService } from "src/app/services/book.service";
import { Book } from "src/app/models/Book.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.scss"]
})
export class BookDetailsComponent implements OnInit {
  public book: Book = null;

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.book);
  }

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private navHelper: NavHelperService,
  ) { }

  public ngOnInit() {
    this.loadBook();
  }

  private loadBook() {
    const id = this.route.snapshot.paramMap.get("id");
    this.book = this.bookService.allBooks.find((book) => {
      return book.id === id;
    });
    if (!this.ready) {
      this.navHelper.goBookList();
    }
  }

}
