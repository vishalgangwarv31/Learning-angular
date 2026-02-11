import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user-service';

@Injectable({
  providedIn: 'root',
})
export class EditUserService {
  private http = inject(HttpClient)
  editUrl = 'https://ca2980abcb7c944f48dc.free.beeceptor.com/api/users'

  editUser(id: string,updatedUser : User):Observable<User>{
    const url = `${this.editUrl}/${id}`;
    return this.http.put<User>(url,updatedUser)
  }
}
