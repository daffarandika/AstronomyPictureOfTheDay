import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Fact } from './fact';

@Injectable({
  providedIn: 'root'
})
export class AstronomyService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:5000/v1/apod'

  getFacts(): Observable<Fact[]> {
    return this.http.get<Fact[]>(`${this.baseUrl}/?count=2`)
  }

  getFactByDate(date: string): Observable<Fact> {
    return this.http.get<Fact>(`${this.baseUrl}?date=${date}`)
  }


}
