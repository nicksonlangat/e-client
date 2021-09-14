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
    const auth_token = localStorage.getItem('myToken')
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Token ${auth_token}` 
   });

    return this.http.get('http://206.81.26.98/books/', { headers: reqHeader });
  }

  public delete(id){
    const auth_token = localStorage.getItem('myToken')
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Token ${auth_token}` 
   });
   return this.http.delete(`http://206.81.26.98/books/${id}`, { headers: reqHeader });
   
  }

  public createPost(formData:any) {
    const auth_token = localStorage.getItem('myToken')
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Token ${auth_token}` 
   });

    return this.http.post<any>('http://206.81.26.98/books/', formData, { headers: reqHeader });
  }

  public register(formData:any) {
   
    return this.http.post<any>('http://206.81.26.98/accounts/register', formData, );
  }
  public login(formData:any) {
    
    return this.http.post<any>('http://206.81.26.98/accounts/login', formData, );
  }
}


// http://206.81.26.98