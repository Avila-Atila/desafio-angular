import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vindata } from '../models/Vindata.Interface';

@Injectable({
  providedIn: 'root',
})
export class VinsearchService {
  private apiVin = 'http://localhost:3001/vehicleData';
  constructor(private http: HttpClient) {}

  getVin(vin: string): Observable<Vindata> {
    return this.http.post<Vindata>(this.apiVin, { vin });
  }
}
