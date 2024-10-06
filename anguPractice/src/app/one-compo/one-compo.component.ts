import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-one-compo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './one-compo.component.html',
  styleUrl: './one-compo.component.css'
})
export class OneCompoComponent {

  inpType: string = "checkbox";

  gendLable: string = "Male-Lable";

  ToggleGender(){
    this.gendLable = this.gendLable=="Male-Lable"?"Female-Lable":"Male-Lable";
  }

  Myname: string = "";

  firstName = signal("I am LOHITH R");
  changeName(){
    let name = "Game Creator";
    this.firstName.set(`I am the "${name}"`);
  }

  StudentList: any[] = [
    {isActive: false, city: "Banglore", name: "Lohith", age: 20, gender: "Male"},
    {isActive: false, city: "china", name: "Ragini", age: 21, gender: "FeMale"},
    {isActive: true, city: "kerala", name: "Rahul", age: 25, gender: "Male"},
    {isActive: false, city: "Mumbai", name: "Dhanush", age: 64, gender: "Male"},
    {isActive: true, city: "telangana", name: "Samaya", age: 37, gender: "FeMale"},
    {isActive: false, city: "jaipur", name: "Varsha", age: 89, gender: "FeMale"},
    {isActive: true, city: "kolkata", name: "daniel", age: 12, gender: "Male"},
    {isActive: false, city: "pune", name: "Krishna", age: 90, gender: "Male"}
  ];

  daynum: number = 0;
  
}
