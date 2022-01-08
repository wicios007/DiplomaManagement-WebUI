import { Component, Input, OnInit } from '@angular/core';
import { IThesisDto } from 'src/app/interfaces/IThesisDto';
import { IUser } from 'src/app/interfaces/IUser';

@Component({
  selector: 'app-thesis-card-pdf',
  templateUrl: './thesis-card-pdf.component.html',
  styleUrls: ['./thesis-card-pdf.component.css']
})
export class ThesisCardPdfComponent implements OnInit {

  @Input() thesis : IThesisDto
  @Input() student : IUser
  @Input() promoter : IUser

  constructor() { }

  ngOnInit(): void {
  }

}
