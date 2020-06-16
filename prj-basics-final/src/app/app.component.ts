import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  urlSelected: string;

  selectUrl(urlSelected: string){
    this.urlSelected = urlSelected;
  }
}
