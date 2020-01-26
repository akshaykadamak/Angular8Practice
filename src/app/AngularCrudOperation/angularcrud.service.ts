import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class AngularcrudService {
data: any;
taskURL = 'http://localhost:3000/StudInfo';
  constructor(private http: HttpClient) { }


  getData(): Observable<any> {
    return this.http.get<any>(this.taskURL)
      .pipe(
        map(
          resp => this.data = resp
        )
      )
  }

  createData(info: any): Observable<any>
  {
    return this.http.post('http://localhost:3000/StudInfo', info);
  }

}
