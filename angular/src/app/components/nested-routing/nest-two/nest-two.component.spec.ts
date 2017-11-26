import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestTwoComponent } from './nest-two.component';

describe('NestTwoComponent', () => {
  let component: NestTwoComponent;
  let fixture: ComponentFixture<NestTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
