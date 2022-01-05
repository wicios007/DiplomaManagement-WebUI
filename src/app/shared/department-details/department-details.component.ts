import { Component, Input, OnInit } from '@angular/core';
import { IDepartmentDto } from 'src/app/interfaces/IDepartmentDto';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  @Input() departmentDto : IDepartmentDto
  constructor(private departmentService : DepartmentService) { }

  ngOnInit(): void {
  }

}
