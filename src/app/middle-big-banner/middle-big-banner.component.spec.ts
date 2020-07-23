import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleBigBannerComponent } from './middle-big-banner.component';

describe('MiddleBigBannerComponent', () => {
  let component: MiddleBigBannerComponent;
  let fixture: ComponentFixture<MiddleBigBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleBigBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleBigBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
