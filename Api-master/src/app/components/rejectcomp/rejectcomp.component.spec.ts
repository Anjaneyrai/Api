import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectcompComponent } from './rejectcomp.component';

describe('RejectcompComponent', () => {
  let component: RejectcompComponent;
  let fixture: ComponentFixture<RejectcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
