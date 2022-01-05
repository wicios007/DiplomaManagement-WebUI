import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from 'src/app/interfaces/IUser';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewInit {

  users : IUser[]
  displayedColumns : string[] = ['id', 'firstName', 'lastName', 'email']
  dataSource = new MatTableDataSource<IUser>()
  constructor(private auth : AuthService, private liveAnnouncer : LiveAnnouncer, private router : Router, private toast : ToastService) { this.users = [] }

  ngOnInit(): void {

    this.auth.getUsers().subscribe((data : IUser[]) => {
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.sort = this.sort
      this.users = data
      console.log(data)
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

  redirectTo(id : number){
    this.auth.getUserById(id).subscribe(data => {
      console.log(data);
      this.router.navigate([`dashboards/user-details`, id], { state: data })
    },
      err => {
        this.toast.errorToast("Error", "Błąd podczas pobierania użytkownika")
      })
  }

}
