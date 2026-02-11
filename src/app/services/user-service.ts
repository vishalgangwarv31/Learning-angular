import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient)
  private url = 'https://ca2980abcb7c944f48dc.free.beeceptor.com/api/users'

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.url)
  }
}
