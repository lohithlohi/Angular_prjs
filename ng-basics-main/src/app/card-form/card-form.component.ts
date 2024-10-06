import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})

export class CardFormComponent {
  
  formBuilder : FormBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    number: ['', Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(12)],
    expirationDate: ['', Validators.required],
    cvv: ['', Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(3)]
  });

}
