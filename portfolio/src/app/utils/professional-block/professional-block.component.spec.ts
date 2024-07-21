import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalBlockComponent } from './professional-block.component';

describe('ProfessionalBlockComponent', () => {
  let component: ProfessionalBlockComponent;
  let fixture: ComponentFixture<ProfessionalBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
