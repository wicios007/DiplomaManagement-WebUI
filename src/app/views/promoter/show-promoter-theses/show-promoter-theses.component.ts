import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IThesisDto } from 'src/app/interfaces/IThesisDto';
import { IUser } from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { ThesisService } from 'src/app/services/thesis.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-show-promoter-theses',
  templateUrl: './show-promoter-theses.component.html',
  styleUrls: ['./show-promoter-theses.component.css']
})
export class ShowPromoterThesesComponent implements OnInit, AfterViewInit {

  theses: IThesisDto[]
  these : IThesisDto | undefined
  user: IUser
  displayedColumns: string[] = ['id', 'name', 'nameEnglish']
  dataSource = new MatTableDataSource<IThesisDto>()
  constructor(private router : Router, private auth : AuthService, private thesisService : ThesisService, private liveAnnouncer : LiveAnnouncer, private toast : ToastService) {
    this.theses = []

    this.auth.currentUser = JSON.parse(localStorage.getItem('currentUserJSON')!)
    this.user = this.auth.currentUser

    this.thesisService.getByPromoterId(this.auth.currentUser.departmentId, this.auth.currentUser.id).subscribe(data => {
      this.theses = data
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.sort = this.sort
      console.log(data)
    })

    // this.auth.getCurrentUser().subscribe(data => {
    //   this.user = data
    //   console.log(this.user)
    // }, err => {
    //   console.error(err)
    //   this.toast.errorToast("Błąd", "Wystąpił błąd podczas pobierania użytkownika")
    // }, () => {
     
    // })

   }

  ngOnInit(): void {

  }

  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
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
    this.thesisService.getById(this.user.departmentId, id).subscribe(data => {
      console.log(data);
      this.router.navigate([`dashboards/thesis/show/`, id], { state : data })
    },
    err => {
      this.toast.errorToast("Error", "Błąd podczas pobierania proponowanego tematu")
    })
  }

}
