import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTitleComponent } from './personal-title.component';

describe('PersonalTitleComponent', () => {
  let component: PersonalTitleComponent;
  let fixture: ComponentFixture<PersonalTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
