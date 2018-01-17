import { Component, OnInit } from '@angular/core';

import { Menu } from '~/app/menu'

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  breadcrumbs: Menu[] = [
    {title: '首页', path: 'dashboard', i18n: ''},
    {title: '首页2', path: 'metrics', i18n: ''}
  ]

  constructor() { }

  ngOnInit() {
  }

}
