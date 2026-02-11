import { Component, signal } from '@angular/core';
import { UserData } from './components/user-data/user-data';

@Component({
  selector: 'app-root',
  imports: [UserData],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('leran-app');
}
