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
  selector: 'app-proposed-theses-show',
  templateUrl: './proposed-theses-show.component.html',
  styleUrls: ['./proposed-theses-show.component.css']
})
export class ProposedThesesShowComponent implements OnInit {


  theses: IProposedThesisDto[]
  these : IProposedThesisDto | undefined
   user: IUser
  displayedColumns: string[] = ['id', 'name', 'nameEnglish','isAccepted']
  dataSource = new MatTableDataSource<IProposedThesisDto>()
  constructor(private auth: AuthService, private propTheses: ProposedThesisService, private liveAnnouncer: LiveAnnouncer, private router : Router, private toast : ToastService) {
    this.theses = []
    this.auth.currentUser = JSON.parse(localStorage.getItem('user')!)
    this.user = this.auth.currentUser
  }

  ngOnInit(): void {
    this.propTheses.getAllByPromoter(this.auth.currentUser.departmentId, this.auth.currentUser.id).subscribe((data : IProposedThesisDto[]) => {
        console.log(data)
        this.dataSource = new MatTableDataSource(data)
        this.dataSource.sort = this.sort
        this.theses = data
        console.log(data)
    })
    // this.auth.getCurrentUser().subscribe(data => {
    //   this.user = data
    //   console.log(this.user)
    // },
    //   err => { console.error(err) },
    //   () => {
    //     this.propTheses.getAllByStudent(this.user.departmentId, this.user.id).subscribe((data: IProposedThesisDto[]) => {
    //       console.log(data)
    //       this.dataSource = new MatTableDataSource(data)
    //       this.dataSource.sort = this.sort
    //       this.theses = data
    //       console.log(data)
    //     })
    //   }
    // )
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
    this.propTheses.getById(this.auth.currentUser.departmentId, id).subscribe(data => {
      console.log(data);
      this.router.navigate([`dashboards/promoter/proposed-thesis/`, id], { state : data })
    },
    err => {
      this.toast.errorToast("Error", "Błąd podczas pobierania proponowanego tematu")
    })
  }
}
