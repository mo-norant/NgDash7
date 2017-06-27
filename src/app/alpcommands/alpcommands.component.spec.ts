import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ALPcommandsComponent } from './alpcommands.component';

describe('ALPcommandsComponent', () => {
  let component: ALPcommandsComponent;
  let fixture: ComponentFixture<ALPcommandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ALPcommandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ALPcommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
