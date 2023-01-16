import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkCarouselComponent } from './home-work-carousel.component';

describe('HomeWorkCarouselComponent', () => {
  let component: HomeWorkCarouselComponent;
  let fixture: ComponentFixture<HomeWorkCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWorkCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWorkCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
