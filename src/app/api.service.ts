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
  constructor(private http: HttpClient) { }

  plantSearch(val): Observable<any> {
    let params = new HttpParams()
    .set("token", "zgXCcdZKTKqpECf1MxQaBJ9zTO39Wdaln6kB88ffzcQ")
    .set("q", "cactus");
    this._searchapi = `https://trefle.io/api/v1/plants/search?token=zgXCcdZKTKqpECf1MxQaBJ9zTO39Wdaln6kB88ffzcQ&q=cactus`
    // this._searchapi = "https://quotes-4-life.herokuapp.com/home"
    // this._searchapi = `https://www.omdbapi.com/?s=${val}&type=movie&page=1&apikey=e7fa079b`

    console.log('You searched for a plant!', val)
    return this.http.get<any>(this._searchapi, {params})
  }

  handleError(error) {
    console.log(error, error.message, 'what is wrong?')
      return throwError(error.message || "It doesn't work")
  }

}