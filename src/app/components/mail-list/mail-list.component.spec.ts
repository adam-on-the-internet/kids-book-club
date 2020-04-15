import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MailListComponent } from "./mail-list.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";
import { CardComponent } from "../card/card.component";

describe("MailListComponent", () => {
  let component: MailListComponent;
  let fixture: ComponentFixture<MailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MailListComponent, HeaderComponent, BodyComponent, CardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
