import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestOneComponent } from './nest-one.component';

describe('NestOneComponent', () => {
  let component: NestOneComponent;
  let fixture: ComponentFixture<NestOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
