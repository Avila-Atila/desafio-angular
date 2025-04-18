import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  test5: string | null = null;

  async loginUsuario(info: FormGroup) {
    try {
      const request = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info.value),
      });
      if (!request.ok) {
        throw (await request.json()).message;
      }
      this.test5 = null;
    } catch (error) {
      this.test5 = String(error);
    }
  }
}
