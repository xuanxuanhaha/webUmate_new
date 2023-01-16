import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWeAreComponent } from './home-we-are.component';

describe('HomeWeAreComponent', () => {
  let component: HomeWeAreComponent;
  let fixture: ComponentFixture<HomeWeAreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWeAreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWeAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
