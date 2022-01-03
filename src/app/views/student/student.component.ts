import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
    this.auth.getCurrentUser().subscribe(data => this.auth.currentUser = data)
  }

}
