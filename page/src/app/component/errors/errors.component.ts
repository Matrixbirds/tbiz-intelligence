import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {
  msg: String = 'unknown error'

  constructor() {
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class NotFound extends ErrorsComponent implements OnInit {
  msg: String = 'not found'
}

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class PermissionDenied extends ErrorsComponent implements OnInit {
  msg: String = 'permission denied'
}

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class InternalError extends ErrorsComponent implements OnInit {
  msg: String = 'internal error'
}