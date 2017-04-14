import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchIndexComponent } from './launch-index.component';

describe('LaunchIndexComponent', () => {
  let component: LaunchIndexComponent;
  let fixture: ComponentFixture<LaunchIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
