import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'dashboard-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class MetricsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}