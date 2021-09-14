import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  fname:any;
  lname:any;
  token=localStorage.getItem('myToken')
  constructor(private router:Router) {
    if (this.token==null){
      this.router.navigate(['/login'])
    }
    this.fname=localStorage.getItem('user_first')
    this.lname=localStorage.getItem('user_last')
  }

}
