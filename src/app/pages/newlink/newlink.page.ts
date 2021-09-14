import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-newlink',
  templateUrl: './newlink.page.html',
  styleUrls: ['./newlink.page.scss'],
})
export class NewlinkPage implements OnInit {
  myForm=new FormGroup({
    title:new FormControl('', [Validators.required]),
    link:new FormControl('', [Validators.required]),
   
  })
  constructor(public formBuilder: FormBuilder,
     private api:ApiService,private http:HttpClient, private router:Router) { }

     get f(){
       return this.myForm.controls;
     }

     ngOnInit(){

     }

     
    submit(){
      const auth_token = localStorage.getItem('myToken')
      var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': `Token ${auth_token}` 
     });
      this.http.post('http://206.81.26.98/links/', this.myForm.value, {headers: reqHeader })
        .subscribe(res => {
          console.log(res);
          this.router.navigate(['/tabs/tab4'])
        })
    }
    goHome(){
      this.router.navigate(['/'])
    }
}
