import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchIndexItemComponent } from './launch-index-item.component';

describe('LaunchIndexItemComponent', () => {
  let component: LaunchIndexItemComponent;
  let fixture: ComponentFixture<LaunchIndexItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchIndexItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchIndexItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
