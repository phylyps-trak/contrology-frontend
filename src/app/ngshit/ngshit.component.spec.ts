import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgshitComponent } from './ngshit.component';

describe('NgshitComponent', () => {
  let component: NgshitComponent;
  let fixture: ComponentFixture<NgshitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgshitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgshitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
