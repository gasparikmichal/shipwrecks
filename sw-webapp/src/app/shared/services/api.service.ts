import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = '/api';

  constructor(private httpClient: HttpClient) {
    //
  }

  getShipwrecks(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/shipwrecks`);
  }

}
