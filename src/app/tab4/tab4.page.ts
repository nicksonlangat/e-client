import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  links;
  constructor(private http:HttpClient) {
    this.http.get('http://localhost:8000/links/').subscribe(
      res=>{
        this.links=res
      }
    )
  }

  ngOnInit(){
    
  }

}
