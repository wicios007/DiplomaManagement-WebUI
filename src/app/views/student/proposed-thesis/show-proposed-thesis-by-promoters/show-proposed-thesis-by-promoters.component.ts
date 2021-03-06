import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IProposedThesisDto } from 'src/app/interfaces/IProposedThesisDto';
import { IUser } from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { ProposedThesisService } from 'src/app/services/proposed-thesis.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-show-proposed-thesis-by-promoters',
  templateUrl: './show-proposed-thesis-by-promoters.component.html',
  styleUrls: ['./show-proposed-thesis-by-promoters.component.css']
})
export class ShowProposedThesisByPromotersComponent implements OnInit {

  theses: IProposedThesisDto[]
  these : IProposedThesisDto | undefined
  user: IUser
  users! : IUser[]
  displayedColumns: string[] = ['id', 'name', 'nameEnglish','promoter']
  dataSource = new MatTableDataSource<IProposedThesisDto>()
  constructor(private auth: AuthService, private propTheses: ProposedThesisService, private liveAnnouncer: LiveAnnouncer, private router : Router, private toast : ToastService) {
    this.theses = []
    this.auth.currentUser = JSON.parse(localStorage.getItem('user')!)
    this.user = this.auth.currentUser
  }

  ngOnInit(): void {
    this.propTheses.getAllByPromoters(this.auth.currentUser.departmentId).subscribe((data : IProposedThesisDto[]) => {
        console.log(data)
        this.dataSource = new MatTableDataSource(data)
        this.dataSource.sort = this.sort
        this.theses = data
        console.log(data)
    })

    this.auth.getUsers().subscribe(data => this.users = data)
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

  getUserName(id : number) : string{
    const firstName = this.users.find(c => c.id == id)?.firstName
    const lastName = this.users.find(c => c.id == id)?.lastName
      return `${firstName} ${lastName}`
  }

  redirectTo(id : number){
    this.propTheses.getById(this.auth.currentUser.departmentId, id).subscribe(data => {
      console.log(data);
      this.router.navigate([`dashboards/student/proposed-thesis/show-from-promoters/`, id], { state : data })
    },
    err => {
      this.toast.errorToast("Error", "B????d podczas pobierania proponowanego tematu")
    })
  }
}
