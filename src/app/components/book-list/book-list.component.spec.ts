import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BookListComponent } from "./book-list.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";
import { CardComponent } from "../card/card.component";
import { RouterTestingModule } from "@angular/router/testing";
import { BookInfoCardComponent } from "src/app/components/book-info-card/book-info-card.component";

describe("BookListComponent", () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookListComponent, HeaderComponent, BodyComponent, CardComponent,
        BookInfoCardComponent,
      ],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
