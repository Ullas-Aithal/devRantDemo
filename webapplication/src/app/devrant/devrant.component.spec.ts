import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevrantComponent } from './devrant.component';

describe('DevrantComponent', () => {
  let component: DevrantComponent;
  let fixture: ComponentFixture<DevrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
