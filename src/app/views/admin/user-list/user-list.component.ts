import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/services/auth.service';

interface User{
  email : string;
  firstName : string;
  lastName : string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewInit {

  users : User[]
  displayedColumns : string[] = ['firstName', 'lastName', 'email']
  dataSource = new MatTableDataSource<User>()
  constructor(private auth : AuthService, private liveAnnouncer : LiveAnnouncer) { this.users = [] }

  ngOnInit(): void {

    this.auth.getUsers().subscribe((data : User[]) => {
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
}
