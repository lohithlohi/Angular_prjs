import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCompoComponent } from './one-compo.component';

describe('OneCompoComponent', () => {
  let component: OneCompoComponent;
  let fixture: ComponentFixture<OneCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneCompoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
