import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BookInfoCardComponent } from "./book-info-card.component";

describe("BookInfoCardComponent", () => {
  let component: BookInfoCardComponent;
  let fixture: ComponentFixture<BookInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
