import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carros } from '../models/carros.interface';
import { map, Observable } from 'rxjs';
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
