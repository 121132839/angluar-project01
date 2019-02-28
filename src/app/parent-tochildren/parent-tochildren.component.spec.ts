import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTochildrenComponent } from './parent-tochildren.component';

describe('ParentTochildrenComponent', () => {
  let component: ParentTochildrenComponent;
  let fixture: ComponentFixture<ParentTochildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentTochildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTochildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
