import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
  output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// };

// interface User {
//   id: string;
//   name: string;
//   avatar: string;
// }

const randomIdex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: false,
  // imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // // selectedUser = DUMMY_USERS[randomIdex];
  // selectedUser = signal(DUMMY_USERS[randomIdex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // // get imagePath() {
  // //   return 'assets/users/' + this.selectedUser.avatar;
  // // }

  // onSelectUser() {
  //   const randomIdex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIdex]);
  //   // this.selectedUser = DUMMY_USERS[randomIdex];

  // avatar = input({ required: true });
  // name = input({ required: true });

  /* This is the Signal way of doing this */
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  /* This is the Older way of doing inputing Data to it, WithOut using Signals */
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  /* Insted of this we can use this */
  // @Input({ required: true }) user!: {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // };
  /* Insted of this we can use this */
  @Input({ required: true }) user!: User;

  @Input({ required: true }) selected!: boolean;

  // @Output() select = new EventEmitter();
  @Output() select = new EventEmitter<string>();
  /* This is the replacement for the EventEmitter */
  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
