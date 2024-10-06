import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  message: string = "This message is coming from the HomeComponent!";

  constructor() { }

  changeMessage() {
    this.message = "The message has been updated!";
  }
}
