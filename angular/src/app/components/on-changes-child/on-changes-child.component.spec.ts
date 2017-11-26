import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChangesChildComponent } from './on-changes-child.component';

describe('OnChangesChildComponent', () => {
  let component: OnChangesChildComponent;
  let fixture: ComponentFixture<OnChangesChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnChangesChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnChangesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
