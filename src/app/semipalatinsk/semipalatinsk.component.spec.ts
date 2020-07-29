import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemipalatinskComponent } from './semipalatinsk.component';

describe('SemipalatinskComponent', () => {
  let component: SemipalatinskComponent;
  let fixture: ComponentFixture<SemipalatinskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemipalatinskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemipalatinskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
