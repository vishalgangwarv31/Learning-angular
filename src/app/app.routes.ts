import { Routes } from '@angular/router';
import { UserData } from './components/user-data/user-data';
import { ViewUserComponent } from './components/view-user/view-user';

export const routes: Routes = [
  { path: '', component: UserData },
  { path: 'api/view/:id', component: ViewUserComponent },
];
