import { Component, OnInit } from '@angular/core';

import { User } from '~/app/login';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fields: String[] = ['name', 'password']

  user: User = {name: '', password: ''}

  constructor(
    private router: Router,
    private location: Location
  ) {
  }

  ngOnInit() {
  }

  signin() :void {
    console.log('user', this.user)
    this.router.navigate(['dashboard'])
  }

  back() :void {
    this.location.back()
  }

}
