import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() selectedUrl = new EventEmitter<string>();

  gettingUrl(selectedUrl: string){
    this.selectedUrl.emit(selectedUrl);
  }
}
