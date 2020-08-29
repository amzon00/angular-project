import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElephantDetailsComponent } from './elephant-details.component';

describe('ElephantDetailsComponent', () => {
  let component: ElephantDetailsComponent;
  let fixture: ComponentFixture<ElephantDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElephantDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElephantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
