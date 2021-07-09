import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AUTHENTICATION_TOKEN_LOCAL_STORAGE_KEY } from '../models/authentication.model';
import { User } from '../models/user.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private apiSvc: ApiService) {
  }

  saveToken(token: string): void {
    localStorage.setItem(AUTHENTICATION_TOKEN_LOCAL_STORAGE_KEY, token);
  }

  getToken(): string {
    return localStorage.getItem(AUTHENTICATION_TOKEN_LOCAL_STORAGE_KEY);
  }

  removeToken() {
    localStorage.removeItem(AUTHENTICATION_TOKEN_LOCAL_STORAGE_KEY);
  }

  isAuthenticated(): Observable<boolean> {
    return of(this.getToken() !== null);
  }

  getCurrentUser(): Observable<User> {
    return this.apiSvc.get('api/authentication/current');
  }
}
