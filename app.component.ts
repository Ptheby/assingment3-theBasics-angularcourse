import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hidePara=false;
  howManyClicks=[];
  content="It's too late to be awake!";


  onHidePara() {
    this.hidePara=!this.hidePara;
    this.howManyClicks.push(this.howManyClicks.length+1);

  }
}
