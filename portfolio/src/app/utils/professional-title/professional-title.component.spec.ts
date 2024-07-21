import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalTitleComponent } from './professional-title.component';

describe('ProfessionalTitleComponent', () => {
  let component: ProfessionalTitleComponent;
  let fixture: ComponentFixture<ProfessionalTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
