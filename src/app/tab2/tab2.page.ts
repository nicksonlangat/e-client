import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  audios;
  fname:any;
  lname:any;
  constructor(private http:HttpClient, private router:Router) {
    this.fname=localStorage.getItem('user_first')
    this.lname=localStorage.getItem('user_last')
    const auth_token = localStorage.getItem('myToken')
      var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': `Token ${auth_token}` 
     });
    this.http.get('http://206.81.26.98/audios/', {headers: reqHeader }).subscribe(
      res=>{
        this.audios=res
      }
    )
  }
  logout(){
    localStorage.removeItem('myToken')
    this.router.navigate(['/login'])
  }
  public Delete(id){
    const auth_token = localStorage.getItem('myToken')
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Token ${auth_token}` 
   });
   return this.http.delete(`http://206.81.26.98/audios/${id}`, { headers: reqHeader });
   
  }

  delete(id){
    return this.Delete(id).subscribe(res=>{
      console.log(res)
      const auth_token = localStorage.getItem('myToken')
      var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': `Token ${auth_token}` 
     });
    this.http.get('http://206.81.26.98/audios/', {headers: reqHeader }).subscribe(
      res=>{
        this.audios=res
      }
    )
    })
  }

}
