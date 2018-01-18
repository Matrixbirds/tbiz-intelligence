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
      title: '数据源',
      path: '/dashboard/data_source',
      i18n: 'data_source'
    },
    {
      title: '图表库',
      path: '/dashboard/charts',
      i18n: 'charts'
    },
    {
      title: '文章库',
      path: '/dashboard/articles',
      i18n: 'articles'
    },
    {
      title: '权限列表',
      path: '/dashboard/permissions',
      i18n: 'permissions'
    },
    {
      title: 'SQL编辑器',
      path: '/dashboard/sql_editor',
      i18n: 'sql_editor'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
