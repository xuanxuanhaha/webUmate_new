import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMoreDetailsComponent } from './home-more-details.component';

describe('HomeMoreDetailsComponent', () => {
  let component: HomeMoreDetailsComponent;
  let fixture: ComponentFixture<HomeMoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
