import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _searchapi: string = ""
  constructor(private http: HttpClient) { }

  plantSearch(val) {
    this._searchapi = `https://trefle.io/api/v1/plants/search?token=zgXCcdZKTKqpECf1MxQaBJ9zTO39Wdaln6kB88ffzcQ&q=${val}`
    console.log('You searched for a plant!', val)
    // return this.http.get(this._searchapi)
  }

}
