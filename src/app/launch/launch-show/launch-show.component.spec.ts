import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchShowComponent } from './launch-show.component';

describe('LaunchShowComponent', () => {
  let component: LaunchShowComponent;
  let fixture: ComponentFixture<LaunchShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
