import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import { dashboardFeature} from './store/dashboard.reducer'
import {AsyncPipe} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {userActions} from "../user/store/user.actions";
import {LoginService} from "../user/services/login.service";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements  OnInit {

  mood$ =  this.store.select(dashboardFeature.selectMood)
  hours$ = this.store.select( dashboardFeature.selectHours)

  constructor(private store: Store, private route: ActivatedRoute, private loginService: LoginService) {
  }
  ngOnInit(): void {
    // this.store.select()
    this.loginService.saveToken(this.route.snapshot.queryParams['code'])
  }
//
}
