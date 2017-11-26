import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestThreeComponent } from './nest-three.component';

describe('NestThreeComponent', () => {
  let component: NestThreeComponent;
  let fixture: ComponentFixture<NestThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
