import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWhyChooseComponent } from './home-why-choose.component';

describe('HomeWhyChooseComponent', () => {
  let component: HomeWhyChooseComponent;
  let fixture: ComponentFixture<HomeWhyChooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWhyChooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWhyChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
