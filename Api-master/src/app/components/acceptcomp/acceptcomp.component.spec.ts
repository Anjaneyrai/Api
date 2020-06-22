import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptcompComponent } from './acceptcomp.component';

describe('AcceptcompComponent', () => {
  let component: AcceptcompComponent;
  let fixture: ComponentFixture<AcceptcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
