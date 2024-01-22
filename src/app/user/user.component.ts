import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {User} from "../interfaces/user.model";
import {selectUser} from "./store/user.selectors";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {login} from "./store/user.actions";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit{

  user$: Observable<User | null >;
  constructor(private store : Store) {
    this.user$ = this.store.select(selectUser)
  }

  ngOnInit(): void {

  }

  setUser() {
    console.log('*** set user');
    const user = {
      id: '1',
      name: 'Paco',
      surnames: 'González'
    }
    this.store.dispatch(login({ user }))
  }
}
