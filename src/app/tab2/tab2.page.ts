import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  audios;
  constructor(private http:HttpClient) {
    this.http.get('http://localhost:8000/audios/').subscribe(
      res=>{
        this.audios=res
      }
    )
  }

}
