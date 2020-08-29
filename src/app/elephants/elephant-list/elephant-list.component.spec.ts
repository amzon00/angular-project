import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElephantListComponent } from './elephant-list.component';

describe('ElephantListComponent', () => {
  let component: ElephantListComponent;
  let fixture: ComponentFixture<ElephantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElephantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElephantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
