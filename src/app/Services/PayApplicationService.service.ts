import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TokenGenerator } from './token.service';
import { PayApplicationModel } from '../Model/PayApplicationModel.model';

@Injectable({
  providedIn: 'root',
})
export class PayApplicationService {
  private tokenGenerator: TokenGenerator = inject(TokenGenerator);
  private http: HttpClient = inject(HttpClient);
  private prefixUrl: string = 'https://cmi-ofm.azurewebsites.net/api/';

  get(projectId: string) {
    projectId = '9229a3af-13de-4b67-9820-fb808b21efa4';
    const url: string = 'GetAllPayApplication/';
    return this.http.get(this.prefixUrl + url + projectId, {
      headers: { Authorization: this.tokenGenerator.token },
    });
  }

  post(model: PayApplicationModel) {
    console.log('23');

    console.log(model);
    const bod = {
      applicationNumber: 'oo',
      projectId: '9229a3af-13de-4b67-9820-fb808b21efa4',
      applicationDate: '2024-2-9',
      periodFrom: '2024-2-2',
      periodTo: '2024-2-3',
      certificate: 'A/E',
      changeOrderSummary: true,
      retainage: 6,
    };
    let params = new HttpParams();
    params = params.append('ApplicationNumber', 'asjksbcjds123');
    params = params.append('ProjectId', '9229a3af-13de-4b67-9820-fb808b21efa4');
    params = params.append('ApplicationDate', '2002-02-03');
    params = params.append('PeriodFrom', '2002-02-03');
    params = params.append('PeriodTo', '2023-04-05');
    params = params.append('Retainage', '7');
    // ApplicationNumber=asjksbcjds123&ProjectId=9229a3af-13de-4b67-9820-fb808b21efa4&ApplicationDate=2002-02-03&PeriodFrom=2002-03-04&PeriodTo=2023-04-05&Retainage=6
    console.log(bod);

    const url: string = 'CreatePayApplication/';
    return this.http.post(
      this.prefixUrl + url,

      { headers: { Authorization: this.tokenGenerator.token } }
    );
  }
}
