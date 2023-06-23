import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectdayComponent } from './selectday.component';

describe('SelectdayComponent', () => {
  let component: SelectdayComponent;
  let fixture: ComponentFixture<SelectdayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectdayComponent]
    });
    fixture = TestBed.createComponent(SelectdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
