import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdetailstableComponent } from './eventdetailstable.component';

describe('EventdetailstableComponent', () => {
  let component: EventdetailstableComponent;
  let fixture: ComponentFixture<EventdetailstableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventdetailstableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventdetailstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
