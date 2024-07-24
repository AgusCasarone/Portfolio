import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleChevronComponent } from './toggle-chevron.component';

describe('ToggleChevronComponent', () => {
  let component: ToggleChevronComponent;
  let fixture: ComponentFixture<ToggleChevronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleChevronComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleChevronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
