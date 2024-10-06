import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formsvalid',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './formsvalid.component.html',
  styleUrl: './formsvalid.component.css'
})
export class FormsvalidComponent {

  studentform: FormGroup = new  FormGroup({
    firstname: new FormControl("", [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl("", [Validators.required, Validators.minLength(1)]),
    username: new FormControl("", [Validators.required, Validators.email]),
    city: new FormControl("", [Validators.required]),
    state: new FormControl("", [Validators.required]),
    zip:  new FormControl("", [Validators.required, Validators.maxLength(6)]),
    isterms: new  FormControl(false)
  });

  formValue: any;

  onsave(){
    this.formValue = this.studentform.value;
  }
}
