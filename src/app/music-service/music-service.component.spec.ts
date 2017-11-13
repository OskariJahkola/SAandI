import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicServiceComponent } from './music-service.component';

describe('MusicServiceComponent', () => {
  let component: MusicServiceComponent;
  let fixture: ComponentFixture<MusicServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
