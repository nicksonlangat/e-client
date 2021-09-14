import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  books;
  fname:any;
  lname:any;
  constructor(private api:ApiService,
    private http:HttpClient,
    private router:Router) {
    this.fname=localStorage.getItem('user_first')
    this.lname=localStorage.getItem('user_last')
   
  }

  ngOnInit(){
    this.load()
  }
  logout(){
    localStorage.removeItem('myToken')
    this.router.navigate(['/login'])
  }
  load(){
    this.api.getBookss().subscribe(data=>{
      console.log(data)
      this.books=data;
    })
  }
  delete(id){
    return this.api.delete(id).subscribe(res=>{
      console.log(res)
      this.load()
    })
  }

}
