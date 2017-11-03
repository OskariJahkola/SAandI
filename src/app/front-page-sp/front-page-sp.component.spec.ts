import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageSpComponent } from './front-page-sp.component';

describe('FrontPageSpComponent', () => {
  let component: FrontPageSpComponent;
  let fixture: ComponentFixture<FrontPageSpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontPageSpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPageSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
