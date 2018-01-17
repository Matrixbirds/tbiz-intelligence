import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {
  msg: String = 'UNKNOWN ERROR'

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
  msg: String = '404 NOT FOUND'
}

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class PermissionDenied extends ErrorsComponent implements OnInit {
  msg: String = '401 PERMISSION DENIED'
}

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class InternalError extends ErrorsComponent implements OnInit {
  msg: String = '500 INTERNAL ERROR'
}