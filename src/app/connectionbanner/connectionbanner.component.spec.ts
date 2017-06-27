import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionbannerComponent } from './connectionbanner.component';

describe('ConnectionbannerComponent', () => {
  let component: ConnectionbannerComponent;
  let fixture: ComponentFixture<ConnectionbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
