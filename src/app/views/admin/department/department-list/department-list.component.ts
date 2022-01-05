import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IDepartmentDto } from 'src/app/interfaces/IDepartmentDto';
import { AuthService } from 'src/app/services/auth.service';
import { DepartmentService } from 'src/app/services/department.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit, AfterViewInit {

  departmentsDto : IDepartmentDto[]
  displayedColumns : string[] = ['id', 'initials', 'name']
  dataSource = new MatTableDataSource<IDepartmentDto>()
  constructor(private auth : AuthService, private department : DepartmentService, private toast : ToastService, private liveAnnouncer : LiveAnnouncer) {
    this.departmentsDto = []
   }

  ngOnInit(): void {
    this.department.getAll().subscribe(data => {
      this.departmentsDto = data
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.sort = this.sort
    }, (err) => {
      this.toast.errorToast("Błąd","Błąd podczas pobierania departamentów")
    })
  }

  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit(){
    this.dataSource.sort = this.sort
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }

}
