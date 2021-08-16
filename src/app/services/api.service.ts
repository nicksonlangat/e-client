import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public getBookss(){
    return this.http.get('http://localhost:8000/books/');
  }

  public createPost(formData:any) {
    return this.http.post<any>('http://localhost:8000/books/', formData);
  }
}
