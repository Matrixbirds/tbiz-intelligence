import { Component, OnInit } from '@angular/core';
import { Menu } from '~/app/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    {
      title: '首页',
      path: '',
      i18n: 'home'
    },
    {
      title: '指标盘',
      path: '/dashboard/metrics',
      i18n: 'dashboard'
    },
    {
      title: '登录',
      path: '/login',
      i18n: 'login'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
