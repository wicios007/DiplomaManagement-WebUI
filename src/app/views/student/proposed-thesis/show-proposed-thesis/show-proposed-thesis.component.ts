import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IProposedThesisDto } from 'src/app/interfaces/IProposedThesisDto';
import { IUser } from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { ProposedThesisService } from 'src/app/services/proposed-thesis.service';

@Component({
  selector: 'app-show-proposed-thesis',
  templateUrl: './show-proposed-thesis.component.html',
  styleUrls: ['./show-proposed-thesis.component.css']
})
export class ShowProposedThesisComponent implements OnInit {

  theses: IProposedThesisDto[]
  user!: IUser
  displayedColumns: string[] = ['id', 'name', 'nameEnglish']
  dataSource = new MatTableDataSource<IProposedThesisDto>()
  constructor(private auth: AuthService, private propTheses: ProposedThesisService, private liveAnnouncer: LiveAnnouncer) {
    this.theses = []

  }

  ngOnInit(): void {
    this.auth.getCurrentUser().subscribe(data => {
      this.user = data
      console.log(this.user)
    },
      err => { console.error(err) },
      () => {
        this.propTheses.getAllByStudent(this.user.departmentId, this.user.id).subscribe((data: IProposedThesisDto[]) => {
          console.log(data)
          this.dataSource = new MatTableDataSource(data)
          this.dataSource.sort = this.sort
          this.theses = data
          console.log(data)
        })
      }
    )
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

}
