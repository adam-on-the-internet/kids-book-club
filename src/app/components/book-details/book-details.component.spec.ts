import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BookDetailsComponent } from "./book-details.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";
import { CardComponent } from "../card/card.component";
import { BookInfoCardComponent } from "../book-info-card/book-info-card.component";
import { RouterTestingModule } from "@angular/router/testing";
import { LoadingComponent } from "../loading/loading.component";

describe("BookDetailsComponent", () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookDetailsComponent, HeaderComponent, BodyComponent,
        CardComponent, BookInfoCardComponent, LoadingComponent
      ],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
