import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { UserService , User } from '../../services/user-service';
import { MatTableModule, MatTableDataSource, MatTable } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule, MatSort, MatSortHeader } from '@angular/material/sort';
import {SelectionModel} from '@angular/cdk/collections'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { AddUser } from '../add-user/add-user';
import { FormsModule } from '@angular/forms';
import { EditUserDialogComponent } from '../edit-user-dailog-component/edit-user-dailog-component';

@Component({

  selector: 'app-user-data',
  standalone: true,
  imports: [
    MatTable,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    FormsModule
],
  templateUrl: './user-data.html',
  styleUrl: './user-data.css',
})
export class UserData implements OnInit {
  private userService = inject(UserService)
  public users : User[] = []
  initialSelection = [];
  allowMultipleSelection = true;
  dataSource = new MatTableDataSource<User>([])
  private dailog = inject(MatDialog)


  ngOnInit(): void {
    this.fetchUser()
  }

  selection = new SelectionModel<User>(this.allowMultipleSelection, this.initialSelection);

 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort !: MatSort

  displayingColumns : String[] = ['select','id' , 'name' , 'email' , 'phone' , 'website','actions'];

  isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected == numRows;
}

  toggleAllRows() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  fetchUser(){
    console.log('fetching user')
    this.userService.getUsers().subscribe({
      next : (data) =>{
        console.log(data)
        this.dataSource.data = data
        this.users = data;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  export(){
    console.log(this.selection.selected)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  openAddUserDailog(){
    const dailogRef = this.dailog.open(AddUser,{
      width:'400px'
    });

    dailogRef.afterClosed().subscribe((newUser)=>{
      if(newUser){
        console.log("from parent new user", newUser)
        this.fetchUser();
      }
    })
  }

  openEditUserDialog(user: User) {
    const dialogRef = this.dailog.open(EditUserDialogComponent, {
      width: '400px',
      data: { ...user }
    });

    dialogRef.afterClosed().subscribe((updatedUser) => {
      if (updatedUser) {
        console.log('Updated user received:', updatedUser);
        this.fetchUser();
      }
    });
  }

}

