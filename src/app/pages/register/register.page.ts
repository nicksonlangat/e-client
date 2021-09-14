import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {

  //define variables
  form: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private auth: ApiService,
    private router: Router,
   
  ) { }

  ngOnInit(): void {
    //initialise registration form
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      password: ['', Validators.required,],
    })
  

  }

  get f() { return this.form.controls; }

  submit(): void{
    this.submitted = true;
    //collect user input
    const data={
      
      email: this.form.get('email').value,
      password:  this.form.get('password').value,
      first_name:  this.form.get('password').value,
      last_name:  this.form.get('password').value,
    }

    console.log(data)
    
    //submit to registration API
    this.auth.register(data)
    .subscribe(
      data => {
        console.log(data)
        
        this.router.navigate(['/login'])
      },
      err => {
        console.log('ERROR: ' ,err)
       
    }
    )
  }


}