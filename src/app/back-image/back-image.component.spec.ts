import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackImageComponent } from './back-image.component';

describe('BackImageComponent', () => {
  let component: BackImageComponent;
  let fixture: ComponentFixture<BackImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
