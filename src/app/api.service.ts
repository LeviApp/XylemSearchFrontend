import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { IPlant } from './plant'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _searchapi: string = ""
  public results = []

  constructor(private http: HttpClient) { }

  plantSearch(val, num): Observable<any> {

    this._searchapi = `http://trefle.io/api/v1/plants/search?token=zgXCcdZKTKqpECf1MxQaBJ9zTO39Wdaln6kB88ffzcQ&q=${val}&page=${num}`

    return this.http.get<any>(this._searchapi)
  }

  handleError(error) {
    console.log(error, error.message, 'what is wrong?')
      return throwError(error.message || "It doesn't work")
  }

}