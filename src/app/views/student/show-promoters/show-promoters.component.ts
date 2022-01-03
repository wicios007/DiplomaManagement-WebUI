import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-show-promoters',
  templateUrl: './show-promoters.component.html',
  styleUrls: ['./show-promoters.component.css']
})
export class ShowPromotersComponent implements OnInit {
  users: IUser[]
  displayedColumns: string[] = ['firstName', 'lastName', 'email']
  //dataSource = new MatTableDataSource<IUser>()
  dataSource: MatTableDataSource<IUser> = new MatTableDataSource<IUser>()
  constructor(private auth: AuthService,
    private liveAnnouncer: LiveAnnouncer,
    private toast: ToastService,
    private router: Router) {
    this.users = []
  }



  ngOnInit(): void {

    this.auth.getUsersByRole(1).subscribe((data: IUser[]) => {
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.sort = this.sort
      this.users = data
      console.log(data)
    })
  }

  @ViewChild(MatSort) sort!: MatSort;

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
      this.router.navigate([`dashboards/user-details`, id], { state: data })
    },
      err => {
        this.toast.errorToast("Error", "Błąd podczas pobierania proponowanego tematu")
      })
  }

}
