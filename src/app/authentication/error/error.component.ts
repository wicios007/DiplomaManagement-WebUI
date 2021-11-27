import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  error : string = "404"
  errorString : String = "Nie znaleziono strony"
  constructor() { }

  ngOnInit(): void {
  }

}
