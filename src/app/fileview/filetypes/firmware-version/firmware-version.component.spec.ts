import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmwareVersionComponent } from './firmware-version.component';

describe('FirmwareVersionComponent', () => {
  let component: FirmwareVersionComponent;
  let fixture: ComponentFixture<FirmwareVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmwareVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmwareVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
