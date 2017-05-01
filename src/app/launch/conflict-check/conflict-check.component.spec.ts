import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConflictCheckComponent } from './conflict-check.component';

describe('ConflictCheckComponent', () => {
  let component: ConflictCheckComponent;
  let fixture: ComponentFixture<ConflictCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConflictCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConflictCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
