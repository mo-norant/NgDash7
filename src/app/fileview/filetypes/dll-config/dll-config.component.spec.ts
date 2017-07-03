import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DLLConfigComponent } from './dll-config.component';

describe('DLLConfigComponent', () => {
  let component: DLLConfigComponent;
  let fixture: ComponentFixture<DLLConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DLLConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DLLConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
