export interface carros {
  id: number;
  vehicle: string;
  volumetotal: number;
  connected: number;
  softwareUpdates: number;
  img: string;
}

export interface CarrosResponse {
  vehicles: carros[];
}
