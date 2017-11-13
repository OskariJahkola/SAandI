import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeServiceComponent } from './life-service.component';

describe('LifeServiceComponent', () => {
  let component: LifeServiceComponent;
  let fixture: ComponentFixture<LifeServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
