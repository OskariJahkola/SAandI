import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBookitComponent } from './about-bookit.component';

describe('AboutBookitComponent', () => {
  let component: AboutBookitComponent;
  let fixture: ComponentFixture<AboutBookitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutBookitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBookitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
