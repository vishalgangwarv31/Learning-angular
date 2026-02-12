import { Component, signal } from '@angular/core';
// import { UserData } from './components/user-data/user-data';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [ RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('leran-app');
}
