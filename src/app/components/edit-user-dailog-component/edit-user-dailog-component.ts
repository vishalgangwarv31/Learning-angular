import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditUserService } from '../../services/editUserService/edit-user-service';
import { User } from '../../services/user-service';

@Component({
  selector: 'app-edit-user-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './edit-user-dailog-component.html'
})
export class EditUserDialogComponent {
  private userService = inject(EditUserService);
  private dialogRef = inject(MatDialogRef<EditUserDialogComponent>);
  constructor(@Inject(MAT_DIALOG_DATA) public user: User) {}

  onSave() {
    if (!this.user.id) return;

    this.userService.editUser(this.user.id.toString(), this.user).subscribe({
      next: (res) => {
        console.log('User updated:', res);
        this.dialogRef.close(res); // send updated user back
      },
      error: (err) => console.error('Error updating user:', err)
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
