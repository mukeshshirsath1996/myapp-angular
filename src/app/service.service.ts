import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = 'http://localhost:9898/emps'
  constructor(private http: HttpClient) { }

  getEmployees()
  {
    return this.http.get(this.url)
  }
}
