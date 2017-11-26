import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedRoutingComponent } from './nested-routing.component';

describe('NestedRoutingComponent', () => {
  let component: NestedRoutingComponent;
  let fixture: ComponentFixture<NestedRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
