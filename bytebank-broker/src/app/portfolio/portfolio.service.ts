import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { PortFolio } from './model/portfolio';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private readonly portfoliopUrl = `${environment.API_URL}/portfolios`;
  constructor(private httpClient: HttpClient) {}

  getPortFolio(id: string): Observable<PortFolio> {
    return this.httpClient.get<PortFolio>(`${this.portfoliopUrl}/${id}`);
  }

  putPortFolio(id: string, portfolio: PortFolio): Observable<PortFolio> {
    return this.httpClient.put<PortFolio>(
      `${this.portfoliopUrl}/${id}`,
      portfolio
    );
  }
}
