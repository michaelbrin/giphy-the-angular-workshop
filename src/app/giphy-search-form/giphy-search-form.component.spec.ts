import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphySearchFormComponent } from './giphy-search-form.component';

describe('GiphySearchFormComponent', () => {
  let component: GiphySearchFormComponent;
  let fixture: ComponentFixture<GiphySearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphySearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphySearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
