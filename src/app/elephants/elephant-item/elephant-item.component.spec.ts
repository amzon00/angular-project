import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElephantItemComponent } from './elephant-item.component';

describe('ElephantItemComponent', () => {
  let component: ElephantItemComponent;
  let fixture: ComponentFixture<ElephantItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElephantItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElephantItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
