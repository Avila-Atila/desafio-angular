import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vindata } from '../models/vindata.interface';

@Injectable({
  providedIn: 'root',
})
export class VinsearchService {
  private apiVin = 'http://localhost:3001/vehicleData';
  constructor(private http: HttpClient) {}

  getVin(info: string): Observable<Vindata> {
    console.log(info);
    return this.http.post<Vindata>(this.apiVin, info);
  }
}
