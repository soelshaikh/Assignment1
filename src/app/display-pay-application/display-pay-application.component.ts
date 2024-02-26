import { Component, inject, OnInit } from '@angular/core';
import { PayApplicationService } from '../Services/PayApplicationService.service';
import { PayApplicationModel } from '../Model/PayApplicationModel.model';
import { map, tap } from 'rxjs';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-display-pay-application',
  standalone: true,
  imports: [CommonModule,DatePipe],
  templateUrl: './display-pay-application.component.html',
  styleUrl: './display-pay-application.component.css',
})
export class DisplayPayApplicationComponent implements OnInit {
  apiService = inject(PayApplicationService);
  applicationList!: PayApplicationModel[];
  isDataAvailable: boolean = false;
  ngOnInit(): void {
    this.fetch();
  }

  private fetch() {
    this.apiService
      .get('')
      .pipe(map((data: any) => data.payApplicationList))
      .subscribe((body) => {
        let tempList: PayApplicationModel[] = [];
        body.forEach((element: any) => {
          tempList.push(
            new PayApplicationModel(
              element.applicationNumber,
              element.applicationDate,
              element.projectId,
              element.periodFrom,
              element.periodTo,
              element.certificate,
              element.retainage,
              element.changeOrderSummary
            )
          );
        });
        this.applicationList = tempList;
        this.isDataAvailable = true;
      });
  }

  onEditApplication(application: PayApplicationModel) {
    console.log(application);
  }
}
