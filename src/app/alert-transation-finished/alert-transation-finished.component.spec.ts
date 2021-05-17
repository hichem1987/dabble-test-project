import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertTransationFinishedComponent } from './alert-transation-finished.component';

describe('AlertTransationFinishedComponent', () => {
  let component: AlertTransationFinishedComponent;
  let fixture: ComponentFixture<AlertTransationFinishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertTransationFinishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertTransationFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
