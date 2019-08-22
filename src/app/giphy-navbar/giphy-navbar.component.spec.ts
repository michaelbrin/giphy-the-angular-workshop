import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyNavbarComponent } from './giphy-navbar.component';

describe('GiphyNavbarComponent', () => {
  let component: GiphyNavbarComponent;
  let fixture: ComponentFixture<GiphyNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphyNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
