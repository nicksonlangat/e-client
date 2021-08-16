import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  videos;
  constructor(private http:HttpClient) {
    this.http.get('http://localhost:8000/videos/').subscribe(
      res=>{
        this.videos=res
      }
    )
  }

}
