import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentChildComponent } from './ng-content-child.component';

describe('NgContentChildComponent', () => {
  let component: NgContentChildComponent;
  let fixture: ComponentFixture<NgContentChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
