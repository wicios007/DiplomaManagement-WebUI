import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.css']
})
export class ShowStudentsComponent implements OnInit {
  users : IUser[]
  user! : IUser
  displayedColumns : string[] = ['firstName', 'lastName', 'email']
  dataSource : MatTableDataSource<IUser> = new MatTableDataSource<IUser>()
  constructor(private auth : AuthService, private router : Router, private liveAnnouncer : LiveAnnouncer, private toast : ToastService) { 
    this.user = JSON.parse(localStorage.getItem('user')!)
    this.users = [] 
  }


  ngOnInit(): void {

    this.auth.getUsersByRoleAndDepartment(this.user.departmentId, 2).subscribe((data : IUser[]) => {
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator
      this.users = data
      console.log(data)
    }, err => {
      console.error(err)
    })
  }
  //

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // ngAfterViewInit(){
  //   this.dataSource.sort = this.sort
  // }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
      console.log(sortState)
    } else {
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }

  redirectTo(id: number) {
    this.auth.getUserById(id).subscribe(data => {
      console.log(data);
      this.router.navigate([`dashboards/promoter/user-details`, id], { state: data })
      //user-details/:id
    },
      err => {
        this.toast.errorToast("Error", "B????d podczas pobierania u??ytkownika")
      })
  }
}
