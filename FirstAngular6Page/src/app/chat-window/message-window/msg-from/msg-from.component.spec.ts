import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgFromComponent } from './msg-from.component';

describe('MsgFromComponent', () => {
  let component: MsgFromComponent;
  let fixture: ComponentFixture<MsgFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
