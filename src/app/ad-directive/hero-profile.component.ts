import { Component, Input } from '@angular/core';

import { AdComponent } from "./Ad.component";

@Component({
  template: `
    <div class="hero-profile">
      <h3>Featured Hero Profile</h3>
      <h4>{{data.name}}</h4>
      <p>{{data.bio}}</p>
      <strong>Hire this hero today!</strong>
    </div>
    `,
  styleUrls: ['./ad-directive.component.css']
})
export class HeroProfileComponent implements AdComponent {
  constructor() {
  }
  //接口实现
  @Input()
  data: any;

}