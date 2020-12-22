import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { IPlant } from './plant'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _searchapi: string = ""
  constructor(private http: HttpClient) { }

  plantSearch(val): Observable<IPlant[]> {
    this._searchapi = `https://trefle.io/api/v1/plants/search?token=zgXCcdZKTKqpECf1MxQaBJ9zTO39Wdaln6kB88ffzcQ&q=${val}`
    console.log('You searched for a plant!', val)
    return this.http.get<IPlant[]>(this._searchapi).pipe(
      catchError(this.handleError)
    )
  }

  handleError(error) {
    console.log(error, error.message, 'what is wrong?')
      return throwError(error.message || "It doesn't work")
  }

}
