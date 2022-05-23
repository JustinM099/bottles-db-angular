import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Wine } from '../Wine'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}


@Injectable({
  providedIn: 'root'
})
export class WinesService {
  private apiUrl = 'http://localhost:5000/wines'

  constructor(private http: HttpClient) { }
  
  getWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(this.apiUrl)
  }


}
