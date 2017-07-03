import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UIDComponent } from './uid.component';

describe('UIDComponent', () => {
  let component: UIDComponent;
  let fixture: ComponentFixture<UIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
