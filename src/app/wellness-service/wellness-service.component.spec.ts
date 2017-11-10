import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellnessServiceComponent } from './wellness-service.component';

describe('WellnessServiceComponent', () => {
  let component: WellnessServiceComponent;
  let fixture: ComponentFixture<WellnessServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellnessServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellnessServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
