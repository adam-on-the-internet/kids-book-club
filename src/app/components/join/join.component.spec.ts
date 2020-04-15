import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { JoinComponent } from "./join.component";
import { HeaderComponent } from "../header/header.component";
import { CardComponent } from "../card/card.component";
import { BodyComponent } from "../body/body.component";

describe("JoinComponent", () => {
  let component: JoinComponent;
  let fixture: ComponentFixture<JoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JoinComponent, HeaderComponent, CardComponent, BodyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
