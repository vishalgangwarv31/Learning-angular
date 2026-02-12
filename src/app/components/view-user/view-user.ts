import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UserData } from '../user-data/user-data';
import { User, UserService } from '../../services/user-service';

@Component({
  selector: 'app-view-user',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './view-user.html',
  styleUrls: ['./view-user.css']
})
export class ViewUserComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private userService = inject(UserService);

  userId!: string;
  user?: User;

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id')!;
    this.fetchUserById();
  }

  fetchUserById() {
    this.userService.getUserById(this.userId).subscribe({
      next: (res) => (this.user = res),
      error: (err) => console.error('Error fetching user:', err)
    });
  }
}
