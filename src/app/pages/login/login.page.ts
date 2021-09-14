import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //define variables
  form: FormGroup;
  submitted = false;
  user_token:any;
  user_first:any;
  user_last:any;

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
      
    }

    console.log(data)
    this.auth.login(data)
    .subscribe(
      data => {
        console.log(data)
        this.user_token=data.auth_token
        this.user_first=data.first_name
        this.user_last=data.last_name
        localStorage.setItem('myToken',this.user_token)
        localStorage.setItem('user_first',this.user_first)
        localStorage.setItem('user_last',this.user_last)
        this.router.navigate(['/'])
      },
      err => {
        console.log('ERROR: ' ,err)
    }
    )
  }
}
