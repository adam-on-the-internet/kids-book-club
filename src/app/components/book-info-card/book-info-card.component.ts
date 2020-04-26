import { Component, Input } from "@angular/core";
import { Book } from "src/app/models/Book.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-book-info-card",
  templateUrl: "./book-info-card.component.html",
  styleUrls: ["./book-info-card.component.scss"]
})
export class BookInfoCardComponent {
  @Input() public book: Book = null;
  @Input() public next = false;

  public get hasBook(): boolean {
    return BooleanHelper.hasValue(this.book);
  }

  public get hasYoutubeLink(): boolean {
    return BooleanHelper.hasValue(this.book.youtubeLink);
  }

  public get hasPdfLink(): boolean {
    return BooleanHelper.hasValue(this.book.pdfLink);
  }

  public get titleText(): string {
    if (!this.hasBook) {
      return null;
    }
    if (this.next) {
      return `Next Book: ${this.book.title}`;
    }
    return this.book.title;
  }

  public get youtubeLink() {
    if (!this.hasBook || !this.hasYoutubeLink) {
      return null;
    }
    const dangerousVideoUrl = "https://www.youtube.com/embed/" + this.book.youtubeLink;
    return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
  }

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

}
