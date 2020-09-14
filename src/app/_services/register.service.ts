import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Register } from '../_models/register';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RegisterService {

  constructor(
    private http: HttpClient
  ) {}

  register(user: Register): Observable<object> {
    return this.http.post(`${environment.apiUrl}`, user);
  }

}
