import { NgClass, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  // Constructor with FormBuilder injection
  // constructor(private fb: FormBuilder) { }

  // Anhular 17+ inject() function
  formBuilder: FormBuilder = inject(FormBuilder);
  /**
   * The equivalent code using FormGroup is
   *
   * contactForm = new FormGroup({
   *  firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
   *  lastName: new FormControl('', [Validators.required, Validators.minLength(1)]),
   *  email: new FormControl('', [Validators.required, Validators.email]),
   *  phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10)]),
   * });
   * */
  contactForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(1)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [
      '',
      [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(10),
      ],
    ],
  });

  get f() {
    return this.contactForm.controls;
  }
}
