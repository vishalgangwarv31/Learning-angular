import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user-service';

@Injectable({
  providedIn: 'root',
})
export class AddUserService {
  private http = inject(HttpClient)
  addUrl = 'https://ca2980abcb7c944f48dc.free.beeceptor.com/api/users'

  addUser(user :User):Observable<User>{
    return this.http.post<User>(this.addUrl,user);
  }
}
