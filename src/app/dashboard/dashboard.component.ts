import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import { dashboardFeature} from './store/dashboard.reducer'
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements  OnInit {

  mood$ =  this.store.select(dashboardFeature.selectMood)
  hours$ = this.store.select( dashboardFeature.selectHours)

  constructor(private store: Store) {
  }
  ngOnInit(): void {
    // this.store.select()
  }
//
}
