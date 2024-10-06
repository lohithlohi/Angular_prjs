import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsvalidComponent } from './formsvalid.component';

describe('FormsvalidComponent', () => {
  let component: FormsvalidComponent;
  let fixture: ComponentFixture<FormsvalidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsvalidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
