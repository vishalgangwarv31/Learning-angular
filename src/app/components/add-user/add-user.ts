import { Component, inject } from '@angular/core';
import { AddUserService } from '../../services/add-user-service';
import { MatDialogRef, MatDialogContent } from '@angular/material/dialog';
import { User } from '../../services/user-service';
import { MatFormField, MatLabel } from "@angular/material/select";
import { FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-add-user',
  imports: [MatFormField, MatLabel, FormsModule, MatDialogContent , MatButtonModule ,MatInputModule,
  MatFormFieldModule
],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {
  private addUserService = inject(AddUserService);
  private dailogRef = inject(MatDialogRef<AddUser>)

  user : User = {
    id: 0,
    name : '',
    email:'',
    phone:'',
    website: ''
  }

  onAddUser(){
    this.addUserService.addUser(this.user).subscribe({
      next:(res)=>{
        console.log('user added', res);
        this.dailogRef.close(res);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  onCancel(){
    this.dailogRef.close();
  }

}
