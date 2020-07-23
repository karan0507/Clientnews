import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSideNewsComponent } from './small-side-news.component';

describe('SmallSideNewsComponent', () => {
  let component: SmallSideNewsComponent;
  let fixture: ComponentFixture<SmallSideNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallSideNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallSideNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
