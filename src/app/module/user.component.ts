
import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>👥 Liste des utilisateurs :</h3>
    <ul>
      <li *ngFor="let user of users()">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  `
})
export class UserComponent{
  private service = inject(UserService);
  users = computed(() => this.service.users());
 
 //this one is used just to console the usernames for testing the mapping purpose
  usernames= this.service.userNames;
  
 ngOnInit(): void {
    //this uses to console users
    console.log("List of Users ", this.users());
    //this used to console the mapped usernames
    console.log("List of Usernames ",this.usernames())
 }
}
