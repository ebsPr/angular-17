import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {User} from "../interfaces/user.model";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {userFeature} from "./store/user.reducer";
import {userActions} from "./store/user.actions";

const CLIENT_ID = '10db83740ee44ea2835c632ec839d424'

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit{

  user$: Observable<User | null >;
  constructor(private store : Store) {
    this.user$ = this.store.select(userFeature.selectUser)
  }

  ngOnInit(): void {

  }

  login() {
    this.store.dispatch(userActions.login())
    // this.store.dispatch(userActions.setUser({ user : {id: 'test-2', name: 'test-2', surnames: 'test-2'}}))
  }
}
