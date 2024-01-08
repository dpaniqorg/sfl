import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import { BehaviorSubject, NEVER, Observable, Subject, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '@shared/constants/api';

const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append(
  'Authorization',
  `Bearer ${localStorage.getItem('accessToken')}`
);

@Injectable()
export class HttpService {
  #httpClient = inject(HttpClient);

  get<T>(url: string): Observable<T> {
    return this.#httpClient
      .get<T>(API_URL + '/' + url, {
        withCredentials: true,
        headers: headers as any,
      })
      .pipe(
        catchError((err) => {
          return NEVER;
        })
      );
  }

  post<T>(url: string, data: object): Observable<T> {
    return this.#httpClient
      .post<T>(API_URL + '/' + url, data, {
        withCredentials: true,
        headers: headers as any,
      })
      .pipe(
        catchError((err) => {
          return NEVER;
        })
      );
  }
}
