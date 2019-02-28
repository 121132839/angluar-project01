import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App!';
  name1 = 'zmq';
  constructor() {

  }
  data = ['时间', '空间', '能量'];
  agreed: number = 0;
  disagreed: number = 0;
  count(agreed: boolean) {
    agreed?this.agreed++:this.disagreed++;
  }
}
