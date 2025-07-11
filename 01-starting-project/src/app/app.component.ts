import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
// import { HeaderComponent } from "./header/header.component";
// import { UserComponent } from './user/user.component';
// import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
