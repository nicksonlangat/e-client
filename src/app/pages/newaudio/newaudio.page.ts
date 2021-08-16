import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-newaudio',
  templateUrl: './newaudio.page.html',
  styleUrls: ['./newaudio.page.scss'],
})
export class NewaudioPage implements OnInit {

  myForm=new FormGroup({
    title:new FormControl('', [Validators.required]),
    
    file:new FormControl('', [Validators.required]),
    
    fileSource:new FormControl('', [Validators.required]),
   
  })
  constructor(public formBuilder: FormBuilder,
     private api:ApiService,private http:HttpClient, private router:Router) { }

     get f(){
       return this.myForm.controls;
     }

     ngOnInit(){

     }

     onFileChange(event) {
  
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.myForm.patchValue({
          fileSource: file
        });
      }
    }
   
       
    submit(){
      const formData = new FormData();
      formData.append('file', this.myForm.get('fileSource').value);
      formData.append('title', this.myForm.get('title').value);
      this.http.post('http://localhost:8000/audios/', formData)
        .subscribe(res => {
          console.log(res);
          this.router.navigate(['/tabs/tab2'])
        })
    }

}
