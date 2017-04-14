import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchEditComponent } from './launch-edit.component';

describe('LaunchEditComponent', () => {
  let component: LaunchEditComponent;
  let fixture: ComponentFixture<LaunchEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
