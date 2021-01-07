import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { IPlant } from './plant'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  plantSearch(val): Observable<any> {
    let searchapi = `https://trefle.io/api/v1/plants/search?token=zgXCcdZKTKqpECf1MxQaBJ9zTO39Wdaln6kB88ffzcQ&q=${val}`
    console.log('You searched for a plant!', val, searchapi)
    console.log(this.http.get<IPlant[]>(searchapi))
    return this.http.get<any>(searchapi)
    
  }

  handleError(error) {
    console.log(error, error.message, 'what is wrong?')
      return throwError(error.message || "It doesn't work")
  }

}