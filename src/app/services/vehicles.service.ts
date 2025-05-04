import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Carros } from '../models/Carros.interface';
@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  constructor(private http: HttpClient) {}
  private apiVehicles = 'http://localhost:3001/vehicles';

  getVehicles(): Observable<Carros[]> {
    return this.http
      .get<{ vehicles: Carros[] }>(this.apiVehicles)
      .pipe(map((resp) => resp.vehicles));
  }
}
