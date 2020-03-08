import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibleTableFilterSearchComponent } from './visible-table-filter-search.component';

describe('VisibleTableFilterSearchComponent', () => {
  let component: VisibleTableFilterSearchComponent;
  let fixture: ComponentFixture<VisibleTableFilterSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisibleTableFilterSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisibleTableFilterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
