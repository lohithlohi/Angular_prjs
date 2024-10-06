import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OneCompoComponent } from './one-compo/one-compo.component';
import { FormsvalidComponent } from './formsvalid/formsvalid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsvalidComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anguPractice';
}
