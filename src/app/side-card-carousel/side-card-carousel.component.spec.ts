import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideCardCarouselComponent } from './side-card-carousel.component';

describe('SideCardCarouselComponent', () => {
  let component: SideCardCarouselComponent;
  let fixture: ComponentFixture<SideCardCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideCardCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideCardCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
