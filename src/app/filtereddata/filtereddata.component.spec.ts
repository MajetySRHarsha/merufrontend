import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltereddataComponent } from './filtereddata.component';

describe('FiltereddataComponent', () => {
  let component: FiltereddataComponent;
  let fixture: ComponentFixture<FiltereddataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltereddataComponent]
    });
    fixture = TestBed.createComponent(FiltereddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
