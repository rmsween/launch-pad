import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchNewComponent } from './launch-new.component';

describe('LaunchNewComponent', () => {
  let component: LaunchNewComponent;
  let fixture: ComponentFixture<LaunchNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
