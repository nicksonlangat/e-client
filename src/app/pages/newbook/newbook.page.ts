import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.page.html',
  styleUrls: ['./newbook.page.scss'],
})
export class NewbookPage implements OnInit {
  myForm=new FormGroup({
    title:new FormControl('', [Validators.required]),
    description:new FormControl('', [Validators.required]),
    author:new FormControl('', [Validators.required]),
    file:new FormControl('', [Validators.required]),
    image:new FormControl('', [Validators.required]),
    fileSource:new FormControl('', [Validators.required]),
    imageSource:new FormControl('', [Validators.required])
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
    onImageChange(event) {
  
      if (event.target.files.length > 0) {
        const image = event.target.files[0];
        this.myForm.patchValue({
          imageSource: image
        });
      }
    }
       
    submit(){
      const formData = new FormData();
      formData.append('file', this.myForm.get('fileSource').value);
      formData.append('image', this.myForm.get('imageSource').value);
      formData.append('title', this.myForm.get('title').value);
      formData.append('author', this.myForm.get('author').value);
      formData.append('description', this.myForm.get('description').value);
      console.log(formData)
      this.http.post('http://localhost:8000/books/', formData)
        .subscribe(res => {
          console.log(res);
          // alert('Uploaded Successfully.');
          this.router.navigate(['/tabs/tab1'])
        })
    }
 
}
