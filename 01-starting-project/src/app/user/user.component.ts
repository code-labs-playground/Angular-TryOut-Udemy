import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIdex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
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
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
